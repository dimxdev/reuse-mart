import express from "express";
import {
  createCategoryController,
  deleteCategoryByIdController,
  editCategoryByIdController,
  getAllCategoryController,
  getCategoryByIdController,
} from "../controllers/category.controller.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllCategoryController);
router.get("/:categoryId", getCategoryByIdController);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  createCategoryController
);
router.patch(
  "/:categoryId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  editCategoryByIdController
);
router.delete(
  "/:categoryId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  deleteCategoryByIdController
);

export default router;
