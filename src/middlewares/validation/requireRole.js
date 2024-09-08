const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.session.user || req.session.user.role !== role) {
            return  res.render('error', { message: 'Forbidden', status: 403 });
        }
        next();
    };
};

export default requireRole;
