import express from "express";
import { getAllOrders, getUserOrders, placeOrderCOD } from "../controllers/order.controller.js";
import userAuth from "../middlewares/user.auth.js";
import sellerAuth from "../middlewares/seller.auth.js";

const orderRouter = express.Router()

orderRouter.post('/cod', userAuth, placeOrderCOD)
orderRouter.get('/user', userAuth, getUserOrders)
orderRouter.get('/seller', sellerAuth, getAllOrders)

export default orderRouter