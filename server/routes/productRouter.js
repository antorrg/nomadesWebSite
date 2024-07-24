import express from 'express'
import ctr from '../controllers/productController.js'
const productRouter = express.Router()

productRouter.get('/', ctr.getProductController)

productRouter.get('/:id', ctr.getProductIdController)



export default productRouter