const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
require('dotenv').config()
const app=express()

app.use(express.json())
app.use(cors())

const {PORT}=require('./configs/server.config')
const{DB_URL}=require('./configs/db.config')


const hotelRoutes=require('./src/routes/hotel.routes')
const categoryRoutes=require('./src/routes/category.routes')
const userRoutes=require('./src/routes/auth.routes')
const wishListRoutes=require('./src/routes/wishlist.routes')
const {pageNotFound}=require('./src/middlewares/PageNotFound')


hotelRoutes(app)
categoryRoutes(app)
userRoutes(app)
wishListRoutes(app)
app.use(pageNotFound)

mongoose.connect(DB_URL).then(()=>{
    console.log("app successfully connected to the db")
}).catch((err)=>console.log(err))


app.get("/",(req,res)=>{
     res.status(200).send("hello how are you")
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log("your app is running on port 3000")
})

