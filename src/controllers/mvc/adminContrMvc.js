import sv from '../../services/productServices.js'
import sl from '../../services/landingService.js'
import us from '../../services/userServices.js'
import eh from '../../utils/errorHandlers.js'


export default {
    login : eh.catchAsyncMVC(async(req, res)=>{
        res.render('login')
    }),
    admin : eh.catchAsyncMVC(async(req,res)=>{
        const {userId}= req.session.user;
        const userInfo = await us.getUsersById(userId)
        const product = await sv.getProduct()
        res.render('./admin/product.pug', {userInfo, product})
    })
}
