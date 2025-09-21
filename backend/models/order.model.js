import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        ref: 'User' // take refrence from User model
    },
    items: [{
        product: {
            type: String,
            required: true,
            ref: 'Product' // take refrence from Product model
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        ref: 'Address' // take refrence from Address model
    },
    status: {
        type: String,
        default: 'Order Placed'
    },
    paymentType: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true })

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order