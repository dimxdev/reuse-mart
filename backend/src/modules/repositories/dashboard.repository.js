import prisma from "../../db/index.js";

class DashboardRepository {
  async countUsersRepo() {
    return await prisma.user.count({
      where: {
        role: "customer",
      },
    });
  }

  async countProductsRepo() {
    return await prisma.product.count();
  }

  async countOrdersRepo() {
    return prisma.order.count();
  }

  async sumRevenueRepo() {
    return prisma.order.aggregate({
      _sum: {
        total_amount: true,
      },
    });
  }

  async countOrderDikemas() {
    return prisma.order.count({
      where: {
        status: "dikemas",
      },
    });
  }

  async countOrderDikirim() {
    return prisma.order.count({
      where: {
        status: "dikirim",
      },
    });
  }
}

export default new DashboardRepository();
