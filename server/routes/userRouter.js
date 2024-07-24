import express from 'express'
import ctr from '../controllers/userController.js'
import mid from '../middlewares/middlewares.js'

const userRouter = express.Router();

userRouter.post("/user/create", mid.createHolderMidd, ctr.createUserCtr);
userRouter.post("/user/login", mid.createHolderMidd, ctr.loginUserCtr);
userRouter.post("/user/sec", mid.verifyToken, ctr.verifyPassCtr);
userRouter.get("/user", mid.verifyToken, ctr.getUserCtr);
userRouter.get("/user/:id", mid.verifyToken, mid.middUuid, ctr.getDetailCtr);
userRouter.put("/user/:id", mid.verifyToken, mid.middUuid, mid.updHolderMidd, ctr.updUserCtr);
userRouter.patch("/user/sec/:id", mid.verifyToken, mid.middUuid, ctr.changePassCtr);
userRouter.delete("/user/:id", mid.verifyToken, mid.middUuid, ctr.delUserCtr);

export default userRouter;