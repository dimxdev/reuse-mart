import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
import orderController from "../controllers/order.controller.js";

const router = express.Router();

router.get(
  "/dikirim",
  authMiddleware,
  authorizeRoleMiddleware("admin"),
  orderController.getAllOrderDikirimController
);
router.get(
  "/dikemas",
  authMiddleware,
  authorizeRoleMiddleware("admin"),
  orderController.getAllOrderDikemasController
);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  orderController.createOrderController
);
router.get(
  "/my-order",
  authMiddleware,
  authorizeRoleMiddleware("customer"),
  orderController.getAllOrderByUserIdController
);
router.get(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  orderController.getAllOrderController
);
router.get(
  "/:orderId",
  authMiddleware,
  authorizeRoleMiddleware("customer", "admin", "owner"),
  orderController.getOrderByIdController
);
router.patch(
  "/status/:orderId",
  authMiddleware,
  authorizeRoleMiddleware("admin"),
  orderController.editOrderStatusByIdController
);

export default router;
