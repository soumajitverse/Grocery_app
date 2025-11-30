import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
import sellerRouter from './routes/seller.route.js'
import productRouter from './routes/product.route.js'
import addressRouter from './routes/address.route.js'
import orderRouter from './routes/order.route.js'
import cartRouter from './routes/cart.route.js'
import { stripeWebhooks } from './controllers/order.controller.js'

const port = process.env.PORT || 4000
const app = express()


// Allow multiple origins
// const allowedOrigin = "http://localhost:5173"
const allowedOrigin =[ "https://grocery-app-flax-five.vercel.app", "http://localhost:5173", "https://grocery-app-mu-nine.vercel.app"]

app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

// Middleware configuration
app.use(express.json())
app.use(cookieParser()) // it helps to extract token from req.cookies
app.use(cors({
  origin: allowedOrigin,
  credentials: true // here means backend allows cookies to be sent.
}))


app.get('/', (req, res) => res.status(200).send("Api is Working"))
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

const DBconnection = async () => {
  await connectDB()
}


app.listen(port, () => {
  DBconnection()
  console.log(`server is running on http://localhost:${port}`)
})

