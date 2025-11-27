import express from "express";
import {
  createProductController,
  deleteProductByIdController,
  editProductByIdController,
  getAllProductController,
  getProductByIdController,
} from "../controllers/product.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
const router = express.Router();

router.get("/",authMiddleware, authorizeRoleMiddleware("owner"), getAllProductController);
router.get("/:productId", getProductByIdController);
router.post("/", createProductController);
router.patch("/:productId", editProductByIdController);
router.delete("/:productId", deleteProductByIdController);

export default router;
