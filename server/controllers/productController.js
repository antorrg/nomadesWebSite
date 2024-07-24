import serv from '../services/productService.js'
import eh from '../middlewares/errorHandlers.js'

export default {
    getProductController : eh.catchError(async(req, res)=>{
        const response = await serv.getProductServ()
        res.status(200).json(response)
    }),
    getProductIdController : eh.catchError(async(req, res)=>{
        const {id}= req.params;
        const response = await serv.getProductByIdServ(id)
        res.status(200).json(response)
    })
}