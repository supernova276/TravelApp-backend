const Category=require('../models/categories.model')
const categories = require('../../data/categories')

exports.createCategory=async(req,res)=>{
           
    try{
        await Category.remove
        const categoryData=await Category.insertMany(categories.data)
        return res.status(200).send({message:"categories added to the db"})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

exports.getCategory=async(req,res)=>{
    try{
        const categories=await Category.find({})
        return res.status(200).send(categories)
    }
    catch(err){
        return res.status({message:err.message})
    }
}

exports.delteCategory=async(req,res)=>{

    const id=req.params.id;

    try{
        const category=await Category.findByIdAndDelete(id)
        if(!category)return res.status(404).send({message:"the hotel was not found"})

        return res.status(200).send({message:"hotel deleted"})

    }
    catch(err){

        return res.status(500).send({message:"could not delete the hotel"})
    }
}

