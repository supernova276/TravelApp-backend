const {createWishlist,removeWishlist, getWishlist,getUserWishlist}=require('../controllers/wishList.controller')
const { verifyToken } = require('../middlewares/auth.jwt.middleware')

module.exports=(app)=>{

    app.post("/travelApp/api/v1/wishlist",[verifyToken],createWishlist)
    app.get("/travelApp/api/v1/wishlist",getWishlist)
    // app.get("/travelApp/api/v1/:userId/:wishlistId",getUserWishlist)
    app.delete('/travelApp/api/v1/wishlist/:id',[verifyToken],removeWishlist)
}