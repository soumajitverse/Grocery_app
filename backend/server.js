import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
import sellerRouter from './routes/seller.route.js'
import productRouter from './routes/product.route.js'
import addressRouter from './routes/address.route.js'
import orderRouter from './routes/order.route.js'
import cartRouter from './routes/cart.route.js'
dotenv.config()

const port = process.env.PORT || 4000
const app = express()


// Allow multiple origins
const allowedOrigin = "http://localhost:5173"

// Middleware configuration
app.use(express.json())
app.use(cookieParser()) // it helps to extract token from req.cookies
app.use(cors({
  origin: allowedOrigin,
  credentials: true // here means backend allows cookies to be sent.
}))


app.get('/', (req, res) => res.send("Api is Working"))
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)
app.listen(port, () => {
  connectDB()
  console.log(`server is running on http://localhost:${port}`)
})

