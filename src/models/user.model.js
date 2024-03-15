const mongoose=require('mongoose')
const { userStatus } = require('../utils/constants')
const {userTypes}=require('../utils/constants')

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,
        unique:true
    }, 
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true,
        enum:Object.values(userTypes),
        default:userTypes.CUSTOMER
    },
    userStatus:{
        type:String,
        required:true,
        enum:Object.values(userStatus),
        default:userStatus.PENDING
    }
    
},
{
    timestamp: true
})
const User=mongoose.model("users",userSchema)
module.exports =User;