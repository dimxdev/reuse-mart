import prisma from "../../db/index.js";
import bcrypt from "bcrypt";

const findUserByEmail = async (userData) => {
  const user = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  return user;
};

const findUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const createCustomer = async (customerData) => {
  const customer = await prisma.user.create({
    data: {
      name: customerData.name,
      email: customerData.email,
      password: await bcrypt.hash(customerData.password, 10),
      role: "customer",
    },
  });

  return customer;
};

const createAdmin = async (adminData) => {
  const admin = await prisma.user.create({
    data: {
      name: adminData.name,
      email: adminData.email,
      password: await bcrypt.hash(adminData.password, 10),
      role: "admin",
    },
  });

  return admin;
};

const deleteAdmin = async (adminId) => {
  await prisma.user.delete({
    where: {
      id: adminId,
    },
  });
};

export {
  createCustomer,
  findUserByEmail,
  createAdmin,
  deleteAdmin,
  findUserById,
};
