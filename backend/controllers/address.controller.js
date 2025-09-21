import Address from "../models/address.model.js"


// Add Address : /api/address/add
export const addAddress = async (req, res) => {
    try {
        const { userId, address } = req.body
        await Address.create({ ...address, userId })
        return res.status(201).json({
            success: true,
            message: "Address added successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
