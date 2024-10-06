import express from 'express'
import ctr from '../controllers/mvc/pageContrMvc.js'

const pageRouter = express.Router()

pageRouter.get('/', ctr.getLanding)

pageRouter.get('/detalles/:id', ctr.getProductById)

pageRouter.get('/detalle/item/:id', ctr.getDetailItem)

pageRouter.get('/contacto', ctr.contact)

pageRouter.get('/acerca', ctr.about)

pageRouter.get('/error', ctr.probar)


export default pageRouter;