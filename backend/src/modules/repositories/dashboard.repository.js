import prisma from "../../db/index.js";

const countUsersRepo = () => {
  return prisma.user.count({
    where: {
        role: "customer"
    }
  });
};

const countProductsRepo = () => {
  return prisma.product.count();
};

const countOrdersRepo = () => {
  return prisma.order.count();
};

const sumRevenueRepo = () => {
  return prisma.order.aggregate({
    _sum: {
      total_amount: true,
    },
  });
};

export {
  countUsersRepo,
  countProductsRepo,
  countOrdersRepo,
  sumRevenueRepo,
};