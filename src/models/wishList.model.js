const { default: mongoose } = require("mongoose");

const wishListSchema=mongoose.Schema({

    hotelId:{type:String,required:true},

})

const WishList=mongoose.model("wishlist",wishListSchema)
module.exports=WishList