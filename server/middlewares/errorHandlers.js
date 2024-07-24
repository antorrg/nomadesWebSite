

export default {
    catchError : (controller)=>{
    return (req, res, next)=>{
        return controller(req, res, next).catch(next);
    }
    },
    errorEndWare : (err, req, res, next)=>{
        const status = err.status || 500;
        const message = err.message || 'Unexpected server error!';
        console.error('Server error: ', err.message)
        res.status(status).json(message)
    },
    validJson : (err, req, res, next)=>{
        if(err instanceof SyntaxError && err.status === 400 && 'body' in err){
            res.status(400).json({error: 'Invalid JSON format'});
        }else{next()};
    },
}

