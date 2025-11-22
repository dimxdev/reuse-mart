import express from "express";
import {
  createCategoryController,
  deleteCategoryByIdController,
  editCategoryByIdController,
  getAllCategoryController,
  getCategoryByIdController,
} from "../controllers/category.controller.js";
const router = express.Router();

router.get("/", getAllCategoryController);
router.get("/:categoryId", getCategoryByIdController);
router.post("/", createCategoryController);
router.patch("/:categoryId", editCategoryByIdController);
router.delete("/:categoryId", deleteCategoryByIdController);

export default router;
