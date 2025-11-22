const authorizeRole = (...allowedRoles) => {
  const middleware = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized!",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "kamu ga punya akses bro!",
      });
    }

    next();
  };

  return middleware;
};

export default authorizeRole;
