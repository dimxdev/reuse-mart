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

const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: await bcrypt.hash(userData.password, 10),
      role: userData.role || "customer",
    },
  });

  return user;
};

export { createUser, findUserByEmail };
