import express from 'express'
import pageRouter from './pageMvcRouter.js'
import adminRouter from './adminMvcRouter.js'
import productRouter from './productRouterRest.js'
import userRouter from './userRouterRest.js'
import landingRouter from './landingRouter.js'
import {upload, controllerUploader}from '../utils/cloudinary.js'
//import mid from "../middlewares/middlewares.js";

const mainRouter = express.Router()
//mainRouter.use(mid.sanitizeBody);
//mainRouter.use(mid.sanitizeQuery);

mainRouter.use(pageRouter)

mainRouter.use(adminRouter)

mainRouter.post('/api/v1/imgupload', upload.single('image'), controllerUploader) //Ruta de subida de imagenes

mainRouter.use('/api/v1', productRouter)

mainRouter.use('/api/v1', landingRouter)

mainRouter.use('/api/v1', userRouter)

//mainRouter.use(mid.lostRoute)


export default mainRouter;