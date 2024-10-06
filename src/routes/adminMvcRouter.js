import express from 'express'
import ctr from '../controllers/mvc/pageContrMvc.js'
import adCtr from '../controllers/mvc/adminContrMvc.js'
import requireAuth from '../middlewares/validation/requireAuth.js'

const adminRouter = express.Router()

adminRouter.get('/login', adCtr.login)

//adminRouter.get('/logout', ctr.)

adminRouter.get('/admin',  requireAuth, adCtr.admin)


export default adminRouter;

