import express from "express";
import cartController from "../controllers/cart.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  cartController.getUserCartController
);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  cartController.createCartController
);
router.patch(
  "/:cartId",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  cartController.editCartByIdController
);
router.delete(
  "/:cartId",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  cartController.deleteCartByIdController
);
router.delete(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  cartController.deleteAllCartByUserIdController
);

export default router;
