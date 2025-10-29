import mongoose from "mongoose";

// Define the user schema (blueprint of user documents)
const userSchema = new mongoose.Schema({
    // Name of the user - required field
    name: {
        type: String,
        required: true
    },

    // Email must be unique and required
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Password - required (should be hashed before saving)
    password: {
        type: String,
        required: true
    },

    // Cart items - stored as an object
    // default is an empty object {}
    cartItems: {
        type: Object,
        default: {},
    },

    // otp for email verify
    verifyOtp: {
        type: String,
        default: ''
    },

    // email verfication otp expiary time
    verifyOtpExpireAt: {
        type: Number,
        default: 0
    },

    // email acc is verfied or not
    isAccountVerified: {
        type: Boolean,
        default: false
    },

    // reset pass otp
    resetOtp: {
        type: String,
        default: ''
    },

    // reset pass otp expiary time
    resetOtpExpireAt: {
        type: Number,
        default: 0
    }
}, {
    // Do not remove empty objects (so cartItems:{} stays in DB)
    minimize: false,

    // Automatically add createdAt and updatedAt fields
    timestamps: true
});

// Reuse the model if it already exists (prevents OverwriteModelError in hot reload)
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
