import express from 'express'
import ctr from '../controllers/rest/usersControllers.js'
import mdd from '../middlewares/middlewares.js'
import auth from '../middlewares/validation/index.js'


const userRouter = express.Router()

userRouter.post('/user/create', auth.verifyToken,  auth.checkRole([0, 9]),mdd.loginUser ,ctr.userCreateController)
userRouter.post('/user/login', mdd.loginUser ,ctr.loginController)
userRouter.get('/user/logout',  ctr.logout)
userRouter.put('/user/updprofile/:id', auth.verifyToken, mdd.updUserMidd, ctr.updUserCtr)
userRouter.post('/user/update', auth.verifyToken, mdd.userVerifyPassMidd, ctr.verifyPassCtr)
userRouter.put('/user/update:id', auth.verifyToken, mdd.userChangePassMidd, ctr.changePassCtr)
userRouter.patch('/user/update/:id', auth.verifyToken, auth.checkRole([0, 9]), mdd.upgradeUserMidd, ctr.changeStateUserCtr)
userRouter.post('/user/change', auth.verifyToken, auth.checkRole([0, 9]), mdd.userResetPassMidd, ctr.resetPassCtr)
userRouter.delete('/user/:id', auth.verifyToken, auth.checkRole([0, 9]), mdd.middUuid, ctr.delUserCtr)

userRouter.get('/user', auth.verifyToken, ctr.getUserController)//experimental, debe borrarse
export default userRouter;