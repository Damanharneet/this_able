const express  = require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')


app.use(express.json())

env.config()


app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello"
    })
})

const port  = process.env.Port || 2000


app.listen(port,()=>{
    console.log(`server is running on port ${process.env.PORT}`)

})