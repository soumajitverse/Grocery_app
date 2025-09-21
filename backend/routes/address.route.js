import express from "express";
import userAuth from "../middlewares/user.auth.js";
import { addAddress, getAddress } from "../controllers/address.controller.js";

const addressRouter = express.Router()

addressRouter.post('/add', userAuth, addAddress)
addressRouter.post('/get', userAuth, getAddress)

export default addressRouter