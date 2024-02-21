const jwt=require('jsonwebtoken')
const { SECRET_TOKEN } = require('../../configs/auth.config')
const User = require('../models/user.model')
const { userTypes } = require('../utils/constants')
require("dotenv").config()

const verifyToken=async(req,res,next)=>{

    const token=req.headers['x-access-token']

    if(!token)return res.status(403).send({message:"token is not provided"})

    jwt.verify(token,SECRET_TOKEN, async function(err,payload){
           
        if(err)return res.status(401).send({message:"the user is not authenticated"})

        const username=payload.name;
        const user= await User.findOne({name:username})
        // this req.user is used belwo in verify token to check user type and basically get the user
        req.user=user;
        next()
    })  

}
const verifyAdmin=(req,res,next)=>{

    if(req.user.userType!==userTypes.ADMIN) return res.status(401).send({message:"user is not authorized"})

    next()

}
module.exports={
    verifyToken,
    verifyAdmin
}