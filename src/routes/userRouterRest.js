import express from 'express'
import ctr from '../controllers/rest/usersControllers.js'
import mdd from '../middlewares/middlewares.js'
import auth from '../middlewares/validation/index.js'


const userRouter = express.Router()

userRouter.post('/user/create', mdd.loginUser ,ctr.userCreateController)
userRouter.post('/user/login', mdd.loginUser ,ctr.loginController)
userRouter.get('/user', auth.verifyToken, ctr.getUserController)
userRouter.get('/user/logout',  ctr.logout)

export default userRouter;