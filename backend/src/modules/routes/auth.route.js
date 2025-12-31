import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/admin", authController.getAllAdminController);
router.post("/login", authController.loginUserController);
router.post("/register/customer", authController.registerCustomerController);
router.post("/register/owner673245", authController.registerOwnerController);
router.post(
  "/register/admin",
  authMiddleware,
  authorizeRoleMiddleware("owner"),
  authController.registerAdminController
);
router.delete(
  "/delete/admin/:adminId",
  authMiddleware,
  authorizeRoleMiddleware("owner"),
  authController.deleteAdminByIdController
);

export default router;
