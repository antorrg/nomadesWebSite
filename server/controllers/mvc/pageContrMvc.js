import sv from '../../services/productServices.js'
import sl from '../../services/landingService.js'
import eh from '../../utils/errorHandlers.js'

export default {
    getLanding : eh.catchAsyncMVC(async(req, res)=>{
        const land = await sl.getOneLanding()
        const infoArray = await sv.getProduct()
        const info = infoArray.products
        console.log('info en cache: ',infoArray.cache)
        res.render('index', {land, info, isAuthenticated: req.session.isAuthenticated})
    }),
    getProductById : eh.catchAsyncMVC(async(req, res)=>{
        const {id}=req.params;
        const info = await sv.getById(id)
        res.render('productDetail', info)
    }),

    getDetailItem  : eh.catchAsyncMVC(async(req, res)=>{
        const {id} = req.params
        const info = await sv.getDetail(id)
        res.render('viewItem', info)
    }),
    contact  : eh.catchAsyncMVC(async(req, res)=>{
        res.render('contact')

    }),
    about : eh.catchAsyncMVC(async(req, res)=>{
        res.render('about')
    }),
    probar : eh.catchAsyncMVC(async(req, res)=>{
        res.render('error', { message: 'Probando el error', status: 400 })
    }),
}