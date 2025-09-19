import express from 'express';
import { isSellerAuth, sellerLogin, sellerLogout } from '../controllers/seller.controller.js';
import sellerAuth from '../middlewares/seller.auth.js';

const sellerRouter = express.Router()

sellerRouter.post('/login', sellerLogin)
sellerRouter.get('/is-auth', sellerAuth, isSellerAuth)
sellerRouter.get('/logout', sellerAuth,  sellerLogout)

export default sellerRouter