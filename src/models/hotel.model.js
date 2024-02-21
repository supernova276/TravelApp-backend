const mongoose=require("mongoose")

const hotelSchema=mongoose.Schema({

   name:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   image:{
    type:String,
    required:true
   },
   imageArr:{
    type:Array,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   city:{
    type:String,
    required:true
   },
   state:{
    type:String,
    required:true
   },
   country:{
    type:String,
    required:true
   },
   price:{
    type:String,
    required:true
   },
   rating:{
    type:String,
    required:true
   },
   numberOfBathrooms:{
    type:String,
    required:true
   },
   numberOfBeds:{
    type:String,
    required:true
   },
   numberOfguest:{
    type:String,
    required:true
   },
   numberOfBedrooms:{
    type:String,
    required:true
   },
   numberOfStudies:{
    type:String,
    required:true
   },
   hostName:{
    type:String,
    required:true
   },
   hostJoinedOn:{
    type:String,
    required:true
   },
   ameneties:{
    type:Array,
    required:true
   },
   healthAndSaftey:{
    type:Array,
    required:true
   },
   hosueRules:{
    type:Array,
    required:true
   },
   propertyType:{
    type:String,
    required:true
   },
   isCancelable:{
    type:Boolean,
    required:true
   }
})

const Hotel=mongoose.model("hotel",hotelSchema)
module.exports=Hotel
