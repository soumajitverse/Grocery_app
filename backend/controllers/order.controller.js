import Order from "../models/order.model.js"
import Product from "../models/product.model.js"


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
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0) // here 0 is the initial acc value


        // Add tax Charge (2%)
        amount += Math.floor(amount * 0.02)

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


// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });
        res.status(200).json({
             success: true, orders 
            });
    } catch (error) {
       return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}