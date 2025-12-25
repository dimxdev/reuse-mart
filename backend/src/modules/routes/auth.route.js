import express from "express";
import {
  deleteAdminByIdController,
  getAllAdminController,
  loginUserController,
  registeradminController,
  registerCustomerController,
} from "../controllers/auth.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/admin", getAllAdminController)
router.post("/register/customer", registerCustomerController);
router.post("/login", loginUserController);
router.post(
  "/register/admin",
  authMiddleware,
  authorizeRoleMiddleware("owner", "customer"),
  registeradminController
);
router.delete(
  "/delete/admin/:adminId",
  authMiddleware,
  authorizeRoleMiddleware("owner", "customer"),
  deleteAdminByIdController
);


export default router;
