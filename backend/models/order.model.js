import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // take refrence from User model
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
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
        type: mongoose.Schema.Types.ObjectId,
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