const {userLogin,userSignup} =require("../controllers/auth.controller")

module.exports=(app)=>{

    app.post("/travelApp/api/v1/signup",userSignup)
    app.post("/travelApp/api/v1/login",userLogin)
}