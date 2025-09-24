import User from "../models/user.model.js"


// Update User CartData : /api/cart/update
export const updateCart = async (req, res) => {

    try {
        const { userId, cartItems } = req.body
        await User.findByIdAndUpdate(userId, { cartItems })
        return res.status(200).json({
            success: true,
            message: "Cart updated"
        })
    } catch (error) {
        console.log("hey mother fucker I am here")
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}