import {
  deleteAnggota,
  editAnggota,
  findAllAnggota,
  findAnggotaById,
  insertAnggota,
} from "../repositories/kelompok.repository.js";

const getAllAnggotaService = async () => {
  const anggotaKelompok = await findAllAnggota();

  return anggotaKelompok;
};

const getAnggotaByIdService = async (anggotaId) => {
  const anggota = await findAnggotaById(anggotaId);

  if (!anggota) {
    throw new Error("anggota not found");
  }

  return anggota;
};

const createAnggotaService = async (anggotaData) => {
  if (!anggotaData.nama || !anggotaData.nim) {
    throw new Error("data yang dimasukkan tidak lengkap");
  }

  if (String(anggotaData.nim).length !== 10) {
    throw new Error("NIM harus 10 karakter");
  }

  const anggota = await insertAnggota(anggotaData);

  return anggota; 
};

const deleteAnggotaByIdService = async (anggotaId) => {
  await getAnggotaByIdService(anggotaId);
  await deleteAnggota(anggotaId);
};

const editAnggotaByIdService = async (anggotaId, anggotaData) => {
  await getAnggotaByIdServices(anggotaId);

  if (String(anggotaData.nim).length !== 10) {
    throw new Error("NIM harus 10 karakter");
  }

  const anggota = await editAnggota(anggotaId, anggotaData);

  return anggota;
};

export {
  getAllAnggotaService,
  getAnggotaByIdService,
  createAnggotaService,
  deleteAnggotaByIdService,
  editAnggotaByIdService,
};
