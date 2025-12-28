import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import authRepository from "../repositories/auth.repository.js";

dotenv.config();

class AuthService {
  async registerCustomerService(customerData) {
    if (!customerData.name || !customerData.email || !customerData.password) {
      throw new Error("data yang dimasukkan tidak lengkap coy!");
    }

    const userByEmail = await authRepository.findUserByEmail(customerData);
    if (userByEmail) {
      throw new Error("email sudah terdaftar!");
    }

    const customer = await authRepository.createCustomer(customerData);

    return customer;
  }

  async registerAdminService(adminData) {
    if (!adminData.name || !adminData.email || !adminData.password) {
      throw new Error("Data yang dimasukkan tidak lengkap Bos!");
    }

    const userByEmail = await authRepository.findUserByEmail(adminData);
    if (userByEmail) {
      throw new Error("email sudah terdaftar!");
    }

    const admin = await authRepository.createAdmin(adminData);

    return admin;
  }

  async loginUserService(userData) {
    const user = await authRepository.findUserByEmail(userData);
    if (!user) {
      throw new Error("email belum terdaftar");
    }

    const checkPassword = await bcrypt.compare(
      userData.password,
      user.password
    );
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
        expiresIn: "7d",
      }
    );

    return { user, token };
  }

  async deleteAdminByIdService(adminId) {
    const findAdmin = await authRepository.findUserById(adminId);
    if (!findAdmin) {
      throw new Error("admin tidak ditemukan!");
    }

    if (findAdmin.role != "admin") {
      throw new Error("user ini bukan admin!");
    }

    await authRepository.deleteAdmin(adminId);
  }

  async getAllAdminService() {
    const admin = await authRepository.findAllAdmin();

    return admin;
  }
}

export default new AuthService();
