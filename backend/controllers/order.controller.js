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
// calculate amount using items
let amoount = await items.reduce(async (acc, item) => {
  const product = await Product.findById(item.product)
  const product = await Product.findById(item.product)
})

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
