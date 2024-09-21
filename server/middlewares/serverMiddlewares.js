
export default {
    errorEndWare :(err, req, res, next)=>{
        const status = err.status || 500;
        const message = err.message || 'Server error';
        console.error(message)
        res.status(status).json(message)
    },
    lostRoute :(req, res, next)=> {
        res.status(404).json({ error: 'Not Found' })},
    
    validJson : (err, req, res, next)=>{
        if(err instanceof SyntaxError && err.status === 400 && 'body' in err){
            res.status(400).json({error: 'Formato JSON invalido'});
        }else{next()};
    },
    // sanitizeBody : [
    //     body('*').trim().escape(), // Sanea todos los campos del cuerpo de la solicitud
    //     (req, res, next) => {
    //       const errors = validationResult(req);
    //       if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //       }
    //       next();
    //     }
    //   ],
      
    //   sanitizeQuery : [
    //     query('*').trim().escape(), // Sanea todos los parámetros de consulta
    //     (req, res, next) => {
    //       const errors = validationResult(req);
    //       if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //       }
    //       next();
    //     }
    //   ],
}