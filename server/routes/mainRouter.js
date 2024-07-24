import express from 'express'
import productRouter from './productRouter.js'
import userRouter from './userRouter.js'
const mainRouter = express.Router()

mainRouter.use('/api',productRouter)
mainRouter.use('/api', userRouter)

export default mainRouter;