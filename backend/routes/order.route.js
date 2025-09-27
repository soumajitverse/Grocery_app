import express from "express";
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from "../controllers/order.controller.js";
import userAuth from "../middlewares/user.auth.js";
import sellerAuth from "../middlewares/seller.auth.js";

const orderRouter = express.Router()

orderRouter.post('/cod', userAuth, placeOrderCOD)
orderRouter.post('/stripe', userAuth, placeOrderStripe)
orderRouter.get('/user', userAuth, getUserOrders)
orderRouter.get('/seller', sellerAuth, getAllOrders)

export default orderRouter