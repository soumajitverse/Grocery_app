import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const port = process.env.PORT || 4000
const app = express()

// Allow multiple origins
const allowedOrigins=["http://localhost:5173"]

// Middleware configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:allowedOrigins,
  Credentials:true
}))

app.get('/',(req,res)=>{
    res.send("Api is Working")
})

app.listen(port, (params) => {
  console.log(`server is running on http://localhost:${port}`)
})

