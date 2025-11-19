import prisma from "../../db/index.js";

const findAllAnggota = async () => {
  const anggota = await prisma.anggotaKelompok.findMany();

  return anggota;
};

const findAnggotaById = async (anggotaId) => {
  const anggota = await prisma.anggotaKelompok.findUnique({
    where: {
      id: anggotaId,
    },
  });

  return anggota;
};

const insertAnggota = async (anggotaData) => {
  const anggota = await prisma.anggotaKelompok.create({
    data: {
      nama: anggotaData.nama,
      nim: String(anggotaData.nim),
    },
  });

  return anggota;
};

const deleteAnggota = async (anggotaId) => {
  await prisma.anggotaKelompok.delete({
    where: {
      id: anggotaId,
    },
  });
};

const editAnggota = async (anggotaId, anggotaData) => {
  const anggota = await prisma.anggotaKelompok.update({
    where: {
      id: anggotaId,
    },
    data: {
      nama: anggotaData.nama,
      nim: String(anggotaData.nim),
    },
  });

  return anggota;
};

export {
  findAllAnggota,
  findAnggotaById,
  insertAnggota,
  deleteAnggota,
  editAnggota,
};
