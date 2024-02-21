const User = require("../models/user.model")
const WishList = require("../models/wishList.model")

exports.createWishlist=async(req,res)=>{

    const newWishlist=new WishList(req.body)
    try{
        const savedWishList=await newWishlist.save()
        res.status(201).send({message:"wishlist created"})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }

}

exports.getWishlist=async(req,res)=>{

    try{
          const wishlist=await WishList.find({})
          if(!wishlist)return res.status(404).send({message:"wishlist not found"})

          return res.status(201).send(wishlist)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}

exports.getUserWishlist=async(req,res)=>{

    const userId=req.params.userId;
    const wishlistId=req.params.wishlistId

    try{
       
        const user=User.findOne({})

    }
    catch(err){
        
    }
}

exports.removeWishlist=async(req,res)=>{

    const hotelId=req.params.id
    
    try{
     const wishlist= await WishList.findByIdAndDelete(hotelId)

     if(!wishlist)res.status(404).send({message:"the hotel was not found"})

    return res.status(201).send({message:"hotel deleted"})
    }
    catch(err){
       return  res.status(500).send({message:err.message})
    }
}