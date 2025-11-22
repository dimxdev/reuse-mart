import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  createUser,
  findUserByEmail,
} from "../repositories/auth.repository.js";

dotenv.config()

const registerUserService = async (userData) => {
  if (!userData.name || !userData.email || !userData.password) {
    throw new Error("data yang dimasukkan tidak lengkap coy!");
  }

  const userByEmail = await findUserByEmail(userData);
  if (userByEmail) {
    throw new Error("email sudah terdaftar!");
  }

  const user = await createUser(userData);

  return user;
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

export { registerUserService, loginUserService };
