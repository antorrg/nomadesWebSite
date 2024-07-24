import express from 'express'
import productRouter from './productRouter.js'
const mainRouter = express.Router()

mainRouter.use('/api',productRouter)

export default mainRouter;