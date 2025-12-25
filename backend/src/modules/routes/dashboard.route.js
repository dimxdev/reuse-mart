import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
import { getDashboardSummaryController } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(
  "/summary",
//   authMiddleware,
//   authorizeRoleMiddleware("admin", "owner"),
  getDashboardSummaryController
);

export default router;
