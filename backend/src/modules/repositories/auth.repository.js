import prisma from "../../db/index.js";
import bcrypt from "bcrypt";
import capitalizeWord from "../../utils/capitalizeWord.js";

class AuthRepository {
  async findUserByEmail(userData) {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    return user;
  }

  async findUserById(userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async findAllAdmin() {
    const admin = await prisma.user.findMany({
      where: {
        role: "admin",
      },
    });

    return admin;
  }

  async createCustomer(customerData) {
    const customer = await prisma.user.create({
      data: {
        name: capitalizeWord(customerData.name),
        email: customerData.email,
        password: await bcrypt.hash(customerData.password, 10),
        role: "customer",
      },
    });

    return customer;
  }

  async createAdmin(adminData) {
    const admin = await prisma.user.create({
      data: {
        name: capitalizeWord(adminData.name),
        email: adminData.email,
        password: await bcrypt.hash(adminData.password, 10),
        role: "admin",
      },
    });

    return admin;
  }

  async deleteAdmin(adminId) {
    await prisma.user.delete({
      where: {
        id: adminId,
      },
    });
  }
}

export default new AuthRepository();
