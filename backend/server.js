import express from 'express'

const port = process.env.PORT || 4000
const app = express()

app.get('/',(req,res)=>{
    res.send("Api is Working")
})

app.listen(port, (params) => {
  console.log(`server is running on http://localhost:${port}`)
})

