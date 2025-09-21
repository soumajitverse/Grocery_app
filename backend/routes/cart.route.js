import express from "express";
import { updateCart } from "../controllers/cart.controller.js";
import userAuth from "../middlewares/user.auth.js";

const cartRouter = express.Router()

cartRouter.post('/update',userAuth , updateCart)

export default cartRouter