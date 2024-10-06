const verifyAuth = (req, res, next) => {
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    next();
  };

  export default verifyAuth;