import mongoose from "mongoose";

const productSechma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offerPrice: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    description: {
        type: Array,
        required: true,
        unique:true
    },
    inStock: {
        type: Boolean,
        default: true
    }
},
    {
        // Automatically add createdAt and updatedAt fields
        timestamps: true
    })

// Reuse the model if it already exists (prevents OverwriteModelError in hot reload)
const Product = mongoose.models.Product || mongoose.model('Product', productSechma);

export default Product;