import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
import sellerRouter from './routes/seller.route.js'
dotenv.config()

const port = process.env.PORT || 4000
const app = express()

// Allow multiple origins
const allowedOrigins=["http://localhost:5173"]

// Middleware configuration
app.use(express.json())
app.use(cookieParser()) // it helps to extract token from req.cookies
app.use(cors({
  origin:allowedOrigins,
  Credentials:true
}))


app.get('/',(req,res)=>res.send("Api is Working"))
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)

app.listen(port, () => {
  connectDB()
  console.log(`server is running on http://localhost:${port}`)
})

