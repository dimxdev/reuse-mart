import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "token kosong",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECREET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
        message: "invalid token"
    });
  }
};

export default authMiddleware;
