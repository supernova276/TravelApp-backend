const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("dotenv").config()
const {SECRET_TOKEN}=require("../../configs/auth.config")
const { userTypes, userStatus } = require("../utils/constants")
const User=require('../models/user.model')

exports.userSignup=async(req,res)=>{

    const {name,password,email,number,userType}=req.body

    const status=userType===userTypes.CUSTOMER?userStatus.APPROVED:userStatus.PENDING

    try{
 
        const hashedPassword= await bcrypt.hashSync(password,10)

        const newUser=new User({
        name,
        password:hashedPassword,
        email,
        number,
        userType,
        userStatus:status
        })

        const user=await newUser.save()
        return res.status(201).send(user)
    
    }
    catch(err){
        res.status(500).send({message:err.message})
    }


}

exports.userLogin=async(req,res)=>{

    const{number,password}=req.body

    const user=await User.findOne({number:number})

    if(!user)return res.status(401).send({message:"invalid mobile number"})

    try{
        const isValidPassword= await bcrypt.compareSync(password,user.password)

        if(!isValidPassword){
            return res.status(401).send({message:"the password is invalid"})
        }

        var token=jwt.sign({name:user.name},SECRET_TOKEN,{expiresIn:'24h'})

        return res.status(200).send({
            name:user.name,
            email:user.email,
            userType:user.userType,
            userStatus:user.userStatus,
            accesstoken:token
        })
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}