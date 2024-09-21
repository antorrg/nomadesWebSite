
export default {
    catchAsync : (controller)=>{
        return (req, res, next)=>{
            return controller(req, res, next).catch(next);
        }
    },
    catchAsyncMVC : (controller) => {
        return (req, res, next) => {
            return controller(req, res, next).catch((err) => {
                // En caso de error, redirigir a una página de error
                res.status(err.status || 500);
                res.render('error', { message: err.message, status: err.status || 500 });
            });
        };
    },
    throwError : (message, status, code = null, log = false) =>{
        const error = new Error(message);
        error.status = status;
        if (code) error.code = code;
        if (log) console.error(error); // Ejemplo de logging simple
        throw error;
      }

}