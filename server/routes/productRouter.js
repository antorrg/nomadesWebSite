import express from 'express'
import ctr from '../controllers/productController.js'
import mid from '../middlewares/middlewares.js'
const productRouter = express.Router()

productRouter.use(mid.sanitizeQuery)
productRouter.post("/project/create", mid.createMidd, ctr.createController);
productRouter.post("/project/item/create",mid.createItem,ctr.createItemController);
productRouter.get("/project", ctr.getProjectHand);
productRouter.get("/project/:id", mid.protectParam, ctr.getProjectById);
productRouter.get("/project/item/:id", mid.protectParam, ctr.getItemById);
productRouter.put("/project/:id", mid.updHome, ctr.updController);
productRouter.patch("/project/:id", mid.createItem, ctr.detailUpdController);
productRouter.delete("/project/:id", mid.protectParam, ctr.delController);



export default productRouter