import express from "express";
import { upload } from "../config/multer.js";
import sellerAuth from "../middlewares/seller.auth.js";
import { addProduct, changeStock, productById, productList } from "../controllers/product.controller.js";

const productRouter = express.Router()
 
// Reason
// productRouter.post('/add', upload.array([images]), sellerAuth, addProduct)
productRouter.post('/add', upload.array(['images']), sellerAuth, addProduct)

productRouter.get('/list', productList)
productRouter.get('/id', productById)
productRouter.post('/stock', sellerAuth, changeStock)

export default productRouter
