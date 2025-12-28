import express from "express";
import categoryController from "../controllers/category.controller.js";
import authorizeRoleMiddleware from "../../middlewares/role.middleware.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", categoryController.getAllCategoryController);
router.get("/:categoryId", categoryController.getCategoryByIdController);
router.post(
  "/",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner", "customer"),
  categoryController.createCategoryController
);
router.patch(
  "/:categoryId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner", "customer"),
  categoryController.editCategoryByIdController
);
router.delete(
  "/:categoryId",
  authMiddleware,
  authorizeRoleMiddleware("admin", "owner"),
  categoryController.deleteCategoryByIdController
);

export default router;
