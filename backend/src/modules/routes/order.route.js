import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
import {
  createOrderController,
  editOrderStatusByIdController,
  getAllOrderByUserIdController,
  getAllOrderController,
  getAllOrderDikemasController,
  getAllOrderDikirimController,
  getOrderByIdController,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/dikirim", getAllOrderDikirimController);
router.get("/dikemas", getAllOrderDikemasController);
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
  // authMiddleware,
  // authorizeRoleMiddleware("admin", "owner"),
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
  authorizeRoleMiddleware("admin", "owner", "customer"),
  editOrderStatusByIdController
);

export default router;
