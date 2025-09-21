import express from "express";
import { upload } from "../config/multer.js";
import sellerAuth from "../middlewares/seller.auth.js";
import { addProduct, productById, productList } from "../controllers/product.controller";

const productRouter = express.Router()

productRouter.post('/add', upload.array([images]), sellerAuth, addProduct)
productRouter.get('/list', productList)
productRouter.get('/id', productById)
