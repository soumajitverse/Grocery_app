import Order from "../models/order.model.js"
import Product from "../models/product.model.js"
import Stripe from "stripe"

// Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, address } = req.body
        if (!address || items.length == 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid data"
            })
        }

        // Calculate Amount Using Items 

        // it stores all the amounts for each products in an array
        let individualAmounts = await Promise.all(
            items.map(async (item) => {
                const product = await Product.findById(item.product) // find the product document from products collection by id
                return (product.offerPrice * item.quantity) // it return the amount for each products i.e., product_price * product_quantity
            })
        )

        // it calculates the total amount for all the products
        let amount = individualAmounts.reduce((acc, curr) => (acc + curr), 0) // add 0 intial value to acc bcz if the array is empty then it will throw error

        // Add tax Charge (2%) on total
        amount += Math.round(amount * 0.02)


        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD"
        })

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