import express from "express";
import { isAuth, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from "../controllers/user.controller.js";
import userAuth from "../middlewares/user.auth.js";

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/is-auth', userAuth, isAuth) // userAuth will be executed before the isAuth controller
userRouter.get('/logout', userAuth, logout) // userAuth will be executed before the logout controller
userRouter.post('/send-verify-otp', userAuth, sendVerifyOtp)
userRouter.post('/verify-account', userAuth, verifyEmail)
userRouter.post('/send-reset-otp', sendResetOtp)
userRouter.post('/reset-password', resetPassword)

export default userRouter