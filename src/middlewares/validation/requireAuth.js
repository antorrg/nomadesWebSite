import { myStore } from "./sessionMiddle.js";

export default async function requireAuth(req, res, next) {
    if (req.session && req.session.user) {
        const { id, email, role } = req.session.user;

        //Ejemplo de cómo podrías verificar la autenticidad de la sesión
        await myStore.get(req.sessionID, (err, session) => {
            if (err || !session) {
                return  res.render('error', { message: 'Sesión no válida', status: 401 });
            }

           // Comparar la información de usuario en `session.user` con `req.session.user`
            if (session.user.id === id && session.user.email === email && session.user.role === role) {
                req.user = req.session.user; // Asignar la información del usuario a `req.user`
                return next(); // Pasar al siguiente middleware o ruta
            } else {
                return  res.render('error', { message: 'Sesión no válida', status: 401 });
            }
        });
    } else {
        res.render('error', { message: 'Sesión no válida', status: 401 });
    }
}    
