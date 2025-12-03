import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
import {
  createOrderController,
  editOrderStatusByIdController,
  getAllOrderByUserIdController,
  getAllOrderController,
  getOrderByIdController,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  createOrderController
);
router.get(
  "/my-order",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  getAllOrderByUserIdController
);
router.get(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  getAllOrderController
);
router.get(
  "/:orderId",
  authMiddleware,
  authorizeRoleMiddleware("customer", "admin", "owner"),
  getOrderByIdController
);
router.patch(
  "/status/:orderId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  editOrderStatusByIdController
);

export default router;
