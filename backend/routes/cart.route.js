import express from "express";
import { updateCart } from "../controllers/cart.controller";
import userAuth from "../middlewares/user.auth";

const cartRouter = express.Router()

cartRouter.post('/update',userAuth , updateCart)

export default cartRouter