const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
require('dotenv').config()
const app=express()

app.use(express.json())
app.use(cors())

const {PORT}=require('./configs/server.config')
const{DB_URL}=require('./configs/db.config')

mongoose.connect(DB_URL).then(()=>{
    console.log("app successfully connected to the db")
}).catch((err)=>console.log(err))


app.get("/",(req,res)=>{
     res.status(200).send("hello how are you")
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log("your app is running on port 3000")
})

