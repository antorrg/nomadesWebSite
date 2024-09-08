import requireAuth from './requireAuth.js'
import requireRole from './requireRole.js'
import jwt from './jwt.js'


export default {
    requireAuth,
    requireRole,
    generateToken: jwt.generateToken,
    verifyToken: jwt.verifyToken,
    checkRole: jwt.checkRole
    
}