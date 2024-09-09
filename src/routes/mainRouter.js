import express from 'express'
import pageRouter from './pageMvcRouter.js'
import adminRouter from './adminMvcRouter.js'
import productRouter from './productRouterRest.js'
import userRouter from './userRouterRest.js'
import file from '../controllers/rest/fileUpload.js'
import {uploadMiddleware} from '../utils/multer.js'
//import mid from "../middlewares/middlewares.js";

const mainRouter = express.Router()
//mainRouter.use(mid.sanitizeBody);
//mainRouter.use(mid.sanitizeQuery);

mainRouter.use(pageRouter)

mainRouter.use(adminRouter)

//mainRouter.post('/api/v1/imgupload', uploadMiddleware,file.uploadImg)

mainRouter.use('/api/v1', productRouter)

mainRouter.use('/api/v1', userRouter)

//mainRouter.use(mid.lostRoute)


export default mainRouter;