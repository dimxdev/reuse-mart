import express from "express";
import {
  createProductController,
  deleteProductByIdController,
  editProductByIdController,
  getAllProductController,
  getProductByIdController,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getAllProductController);
router.get("/:productId", getProductByIdController);
router.post("/", createProductController);
router.patch("/:productId", editProductByIdController);
router.delete("/:productId", deleteProductByIdController);

export default router;
