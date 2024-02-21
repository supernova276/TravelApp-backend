const mongoose=require('mongoose')

const categoriesSchema=mongoose.Schema({
 category:{
    type:String,
    required:true
   }
})

const Category=mongoose.model('categories',categoriesSchema)
module.exports=Category