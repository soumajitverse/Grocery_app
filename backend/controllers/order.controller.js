import { ORDER_CONFIRMATION_TEMPLATE } from "../config/emailTemplates.js"
import { sendEmail } from "../config/sendgrid.js"
import Order from "../models/order.model.js"
import Product from "../models/product.model.js"
import User from "../models/user.model.js"
import Stripe from "stripe"

// Place Order COD and send Order confirmation mail : /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, address } = req.body
        if (!address || items.length == 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid data"
            })
        }

        let prods = [] // array of products

        // Calculate Amount Using Items 

        // it stores all the amounts for each products in an array
        let individualAmounts = await Promise.all(
            items.map(async (item) => {
                const product = await Product.findById(item.product) // find the product document from products collection by id
                let amount = product.offerPrice * item.quantity // the amount for each products i.e., product_price * product_quantity

                // adding product name, quantity and (price * item Quantity)
                prods.push({
                    name: product.name,
                    quantity: item.quantity,
                    price: amount
                })

                return amount // it return the amount for each products i.e., product_price * product_quantity
            })
        )

        // it calculates the total amount for all the products
        let amount = individualAmounts.reduce((acc, curr) => (acc + curr), 0) // add 0 intial value to acc bcz if the array is empty then it will throw error

        // Add tax Charge (2%) on total
        amount += Math.round(amount * 0.02)


        const order = await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD"
        })

        // finding user's name and email by user Id
        let { name, email } = await User.findById(userId)

        // Sending email by sendgrid
        try {
            sendEmail(email, "🧺 Your BASKITO Order Has Been Confirmed!", ORDER_CONFIRMATION_TEMPLATE(name, order._id, order.amount, prods, order.paymentType))
        } catch (error) {
            console.log("sendgrid error ---> ", error)
        }

        return res.status(200).json({
            success: true,
            message: "Order Placed Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Place Order Stripe : /api/order/stripe
export const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, address } = req.body

        if (!address || items.length == 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid data"
            })
        }

        let productData = []

        // Calculate Amount Using Items 

        // it stores all the amounts for each products in an array
        let individualAmounts = await Promise.all(
            items.map(async (item) => {
                const product = await Product.findById(item.product) // find the product document from products collection by id

                // storing 
                productData.push({
                    name: product.name,
                    price: product.offerPrice,
                    quantity: item.quantity
                })

                return (product.offerPrice * item.quantity) // it return the amount for each products i.e., product_price * product_quantity
            })
        )

        // it calculates the total amount for all the products
        let amount = individualAmounts.reduce((acc, curr) => (acc + curr), 0) // add 0 intial value to acc bcz if the array is empty then it will throw error

        // Add tax Charge (2%) on total
        let extraAmount = amount * 0.02
        amount += extraAmount // total amount including tax

        const order = await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "Online"
        })

        const { origin } = req.headers // extracting origin from req.headers ( by the help of this we will move to stripe page)

        // Stripe Gateway Initialize
        const stripeInstace = new Stripe(process.env.STRIPE_SECRET_KEY)

        // create line items for stripe
        const line_items = productData.map((item) => {
            return {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100 // converting rupee to paisa
                },
                quantity: item.quantity
            }
        })

        // add tax
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Tax (2%)",
                },
                unit_amount: extraAmount * 100 // converting rupee to paisa
            },
            quantity: 1
        })


        const session = await stripeInstace.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${origin}/loading?next=my-orders`, // add query to move from loading to my-orders. Actually it is used in Loading components
            cancel_url: `${origin}/cart`,
            metadata: {
                orderId: order._id.toString(),
                userId
            }
        })

        return res.status(200).json({
            success: true,
            url: session.url
        })

    } catch (error) {
        console.log("Error is ---> ", error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Stripe Webhooks to verify Payment Actions : /stripe
export const stripeWebhooks = async (request, response) => {
    // Stripe Gateway Initialize
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

    let event

    // Get the signature sent by Stripe
    const sign = request.headers['stripe-signature'];
    try {
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sign,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        response.status(400).send(`Webhook Error: ${error.message}`)
    }


    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded': {
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            // Getting session Metadata
            const session = await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId,
            });

            // extracting orderId and userId from metadata
            const { orderId, userId } = session.data[0].metadata

            // Updating the DB by making the payment status : paid using the orderId
            let order = await Order.findByIdAndUpdate(orderId, { isPaid: true }, { new: true })
            // clear the cart data after order successfull
            let user = await User.findByIdAndUpdate(userId, { cartItems: {} }, { new: true })

            // extracting name and emai from user
            let { name, email } = user

            let prods = [] // array of products
            let { items } = order // extracting ordered items from order

            await Promise.all(
                items.map(async (item) => {
                    const product = await Product.findById(item.product) // find the product detail from products collection by id
                    let amount = product.offerPrice * item.quantity // the amount for each products i.e., product_price * product_quantity

                    // adding product name, quantity and (price * item Quantity)
                    prods.push({
                        name: product.name,
                        quantity: item.quantity,
                        price: amount
                    })
                })
            )

            // Sending email by sendgrid
            try {
                sendEmail(email, "🧺 Your BASKITO Order Has Been Confirmed!", ORDER_CONFIRMATION_TEMPLATE(name, order._id, order.amount, prods, order.paymentType))
            } catch (error) {
                console.log("sendgrid error ---> ", error)
                break
            }

            return response.status(200).json({
                success: true,
                message: "Order Placed Successfully"
            })
        }

        case 'payment_intent.payment_failed': {
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            // Getting session Metadata
            const session = await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId,
            });

            // extracting orderId and userId from metadata
            const { orderId, userId } = session.data[0].metadata

            // Updating the DB by deleting the payment order using the orderId
            await Order.findByIdAndDelete(orderId)

            break;
        }

        default:
            console.error(`Unhandled event type ${event.type}`)
    }

    // Return a 200 response to acknowledge receipt of the event
    response.status(200).json({ received: true });
}


// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get All Orders (for seller / admin) : /api/order/seller
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Change order status for specific order (for seller / admin) : /api/order/change-status
export const specificOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body // extracting orderID and status
        if (status === 'Delivered') {
            await Order.findByIdAndUpdate(orderId, {
                status: status,
                isPaid: true
            })
        }
        else {
            await Order.findByIdAndUpdate(orderId, { status })
        }

        res.status(200).json({
            success: true,
            message: "Order Status Updated"
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error
        })
    }
}
