// Layer untuk handle request dan response & handle validasi body

import express from "express";
import {
  createAnggota,
  deleteAnggotaById,
  editAnggotaById,
  getAllAnggota,
  getAnggotaById,
} from "./kelompok.service.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const anggota = await getAllAnggota();

  res.send(anggota);
});

router.get("/:anggotaId", async (req, res) => {
  try {
    const anggotaId = parseInt(req.params.anggotaId);
    const anggota = await getAnggotaById(anggotaId);

    res.status(200).send(anggota);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const anggotadata = req.body;
    const anggota = await createAnggota(anggotadata);

    res.status(200).send(anggota);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:anggotaId", async (req, res) => {
  try {
    const anggotaId = parseInt(req.params.anggotaId);
    await deleteAnggotaById(anggotaId);

    res.status(200).send({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:anggotaId", async (req, res) => {
  try {
    const anggotaId = parseInt(req.params.anggotaId);
    const anggotaData = req.body;
    const anggota = await editAnggotaById(anggotaId, anggotaData);

    res.status(200).send({
      data: anggota,
      message: `data ${anggota.nama} berhasil di update`,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
