
const {createCategory,getCategory,delteCategory}=require('../controllers/category.controller')
const { verifyToken, verifyAdmin } = require('../middlewares/auth.jwt.middleware')

module.exports=(app)=>{
    
    app.post('/travelApp/api/v1/categories',[verifyToken,verifyAdmin],createCategory)
    app.get('/travelApp/api/v1/categories',getCategory)
    app.delete('/travelApp/api/v1/categories/:id',[verifyToken,verifyAdmin],delteCategory)
    
}