import sv from '../../services/productServices.js'
import eh from '../../utils/errorHandlers.js'

export default {
    getLanding : eh.catchAsyncMVC(async(req, res)=>{
        const info = await sv.getProduct()
        res.render('index', {info, isAuthenticated: req.session.isAuthenticated})
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
}