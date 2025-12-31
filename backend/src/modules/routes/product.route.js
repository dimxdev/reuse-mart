import express from "express";
import productController from "../controllers/product.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", productController.getAllProductController);
router.get("/:productId", productController.getProductByIdController);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("admin"),
  productController.createProductController
);
router.patch(
  "/:productId",
  authMiddleware,
  authorizeRoleMiddleware("admin"),
  productController.editProductByIdController
);
router.delete(
  "/:productId",
  authMiddleware,
  authorizeRoleMiddleware("admin"),
  productController.deleteProductByIdController
);

export default router;
