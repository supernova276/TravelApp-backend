const hotels=require('../../data/hotels')
const Category = require('../models/categories.model')
const Hotel=require('../models/hotel.model')

exports.createHotel= async(req,res)=>{
    
   try
   { 
    await Hotel.remove
    const hotelData=await Hotel.insertMany(hotels.data)
    res.status(200).send({message:"added hotel data"})
}
   catch(err){
    console.log(err)
       res.status(500).send({message:"could not add data to the db"})
   }
}

// exports.getHotel=async(req,res)=>{

//     try{
//         const hotels=await Hotel.find({})
//         return res.status(200).send(hotels)
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).send({message:"could not get hotels"})
//     }
// }
//this route is causing a clash with the other gethotelbycategory route
exports.getHotelById=async(req,res)=>{
    try{
        const id=req.params.id;

        const hotel=await Hotel.findById(id)
        if(!hotel)return res.status(500).send({message:"hotel not found"})

        return res.status(200).send(hotel)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

exports.getHotelByCategory=async(req,res)=>{
    

    try{
        const hotelCategory=req.query.category
        
        if(hotelCategory)
       { 
       
        const hotels=await Hotel.find({category:hotelCategory})

        if(!hotels){
           return res.status(500).send({message:"could not find "})
        }
        return res.status(200).send(hotels)
    }
    else{
        const hotels=await Hotel.find({})
        return res.status(200).send(hotels)
    }
    }
    catch(err){
        console.log("inside error")
        return res.status(500).send({message:err.message})
    }
}

exports.deleteHotel=async(req,res)=>{

    const hotelId=req.params.hotelId;

    try{
        const hotel=await Hotel.findByIdAndDelete(hotelId)
        if(!hotel)return res.status(404).send({message:"the hotel was not found"})

        return res.status(200).send({message:"hotel deleted"})

    }
    catch(err){

        return res.status(500).send({message:"could not delete the hotel"})
    }
}