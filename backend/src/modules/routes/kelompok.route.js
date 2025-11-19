import express from "express";
import {
  createAnggotaController,
  deleteAnggotaByIdController,
  editAnggotaByIdController,
  getAllAnggotaController,
  getAnggotaByIdController,
} from "../controllers/kelompok.controller.js";

const router = express.Router();

router.get("/", getAllAnggotaController);
router.get("/:anggotaId", getAnggotaByIdController);
router.post("/", createAnggotaController);
router.delete("/:anggotaId", deleteAnggotaByIdController);
router.patch("/:anggotaId", editAnggotaByIdController);

export default router;
