const {createHotel,getHotel,getHotelById,getHotelByCategory,deleteHotel}=require('../controllers/hotel.controller')
const { verifyToken, verifyAdmin } = require('../middlewares/auth.jwt.middleware')

module.exports=(app)=>{
    app.post('/travelApp/api/v1/hotels',[verifyToken,verifyAdmin],createHotel)
    app.get('/travelApp/api/v1/hotels',getHotelByCategory)
    // app.get('/travelApp/api/v1/hotels/all',getHotel)
    app.get('/travelApp/api/v1/hotels/:id',getHotelById)
    app.delete('/travelApp/api/v1/hotels/:hotelId',[verifyToken,verifyAdmin],deleteHotel)
}