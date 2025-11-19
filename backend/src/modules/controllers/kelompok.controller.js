import {
  createAnggotaService,
  deleteAnggotaByIdService,
  editAnggotaByIdService,
  getAllAnggotaService,
  getAnggotaByIdService,
} from "../services/kelompok.service.js";

const getAllAnggotaController = async (req, res) => {
  const anggota = await getAllAnggotaService();

  res.send(anggota);
};

const getAnggotaByIdController = async (req, res) => {
  try {
    const anggotaId = parseInt(req.params.anggotaId);
    const anggota = await getAnggotaByIdService(anggotaId);

    res.status(200).send(anggota);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const createAnggotaController = async (req, res) => {
  try {
    const anggotadata = req.body;
    const anggota = await createAnggotaService(anggotadata);

    res.status(200).send(anggota);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteAnggotaByIdController = async (req, res) => {
  try {
    const anggotaId = parseInt(req.params.anggotaId);
    await deleteAnggotaByIdService(anggotaId);

    res.status(200).send({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const editAnggotaByIdController = async (req, res) => {
  try {
    const anggotaId = parseInt(req.params.anggotaId);
    const anggotaData = req.body;
    const anggota = await editAnggotaByIdService(anggotaId, anggotaData);

    res.status(200).send({
      data: anggota,
      message: `data ${anggota.nama} berhasil di update`,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export {
  getAllAnggotaController,
  getAnggotaByIdController,
  createAnggotaController,
  deleteAnggotaByIdController,
  editAnggotaByIdController,
};
