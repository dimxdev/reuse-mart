import express from "express";
import {
  createCartController,
  deleteAllCartByUserIdController,
  deleteCartByIdController,
  editCartByIdController,
  getUserCartController,
} from "../controllers/cart.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";

const router = express.Router();
 
router.get(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"), 
  getUserCartController
);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  createCartController
);
router.patch(
  "/:cartId",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  editCartByIdController
);
router.delete(
  "/:cartId",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  deleteCartByIdController
);
router.delete(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  deleteAllCartByUserIdController
);

export default router;
