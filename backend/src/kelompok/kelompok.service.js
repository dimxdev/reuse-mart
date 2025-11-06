// lLyer yg bertujuan untuk handle business logic

import {
  deleteAnggota,
  editAnggota,
  findAnggota,
  findAnggotaById,
  insertAnggota,
} from "./kelompok.repository.js";

const getAllAnggota = async () => {
  const anggotaKelompok = await findAnggota();

  return anggotaKelompok;
};

const getAnggotaById = async (anggotaId) => {
  const anggota = await findAnggotaById(anggotaId);

  if (!anggota) {
    throw new Error("anggota not found");
  }

  return anggota;
};

const createAnggota = async (anggotaData) => {
  if (!anggotaData.nama || !anggotaData.nim) {
    throw new Error("data yang dimasukkan tidak lengkap");
  }

  if (String(anggotaData.nim).length !== 10) {
    throw new Error("NIM harus 10 karakter");
  }

  const anggota = await insertAnggota(anggotaData);

  return anggota;
};

const deleteAnggotaById = async (anggotaId) => {
  await getAnggotaById(anggotaId);
  await deleteAnggota(anggotaId);
};

const editAnggotaById = async (anggotaId, anggotaData) => {
  await getAnggotaById(anggotaId);

  if (String(anggotaData.nim).length !== 10) {
    throw new Error("NIM harus 10 karakter");
  }

  const anggota = await editAnggota(anggotaId, anggotaData);

  return anggota;
};

export {
  getAllAnggota,
  getAnggotaById,
  createAnggota,
  deleteAnggotaById,
  editAnggotaById,
};
