import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
import sellerRouter from './routes/seller.route.js'
import connectCloudinary from './config/cloudinary.js'
import productRouter from './routes/product.route.js'
import addressRouter from './routes/address.route.js'
dotenv.config()

const port = process.env.PORT || 4000
const app = express()

const connections = async () => {
  await connectDB()
  connectCloudinary()
}


// Allow multiple origins
const allowedOrigins = ["http://localhost:5173"]

// Middleware configuration
app.use(express.json())
app.use(cookieParser()) // it helps to extract token from req.cookies
app.use(cors({
  origin: allowedOrigins,
  Credentials: true
}))


app.get('/', (req, res) => res.send("Api is Working"))
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', productRouter)
app.use('/api/address', addressRouter)

app.listen(port, () => {
  connections()
  console.log(`server is running on http://localhost:${port}`)
})

