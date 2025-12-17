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

router.get("/", getAllProductController);
router.get("/:productId", getProductByIdController);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner", "customer"),
  createProductController
);
router.patch(
  "/:productId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  editProductByIdController
);
router.delete(
  "/:productId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  deleteProductByIdController
);

export default router;
