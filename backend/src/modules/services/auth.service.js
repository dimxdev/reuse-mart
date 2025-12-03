import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  createAdmin,
  createCustomer,
  deleteAdmin,
  findUserByEmail,
  findUserById,
} from "../repositories/auth.repository.js";

dotenv.config();

const registerCustomerService = async (customerData) => {
  if (!customerData.name || !customerData.email || !customerData.password) {
    throw new Error("data yang dimasukkan tidak lengkap coy!");
  }

  const userByEmail = await findUserByEmail(customerData);
  if (userByEmail) {
    throw new Error("email sudah terdaftar!");
  }

  const customer = await createCustomer(customerData);

  return customer;
};

const registerAdminService = async (adminData) => {
  if (!adminData.name || !adminData.email || !adminData.password) {
    throw new Error("data yang dimasukkan tidak lengkap coy!");
  }

  const userByEmail = await findUserByEmail(adminData);
  if (userByEmail) {
    throw new Error("email sudah terdaftar!");
  }

  const admin = await createAdmin(adminData);

  return admin;
};

const loginUserService = async (userData) => {
  const user = await findUserByEmail(userData);
  if (!user) {
    throw new Error("email belum terdaftar");
  }

  const checkPassword = await bcrypt.compare(userData.password, user.password);
  if (!checkPassword) {
    throw new Error("password salah!");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECREET,
    {
      expiresIn: "1d",
    }
  );

  return { user, token };
};

const deleteAdminByIdService = async (adminId) => {
  const findAdmin = await findUserById(adminId)
  if (!findAdmin) {
    throw new Error("admin tidak ditemukan!")
  }

  if(findAdmin.role != "admin") {
    throw new Error("user ini bukan admin!")
  }

  await deleteAdmin(adminId)
}

export { registerCustomerService, registerAdminService, loginUserService, deleteAdminByIdService };
