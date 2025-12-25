import {
  countUsersRepo,
  countProductsRepo,
  countOrdersRepo,
  sumRevenueRepo,
} from "../repositories/dashboard.repository.js";

const getDashboardSummaryService = async () => {
  const [
    totalUsers,
    totalProducts,
    totalOrders,
    revenueResult,
  ] = await Promise.all([
    countUsersRepo(),
    countProductsRepo(),
    countOrdersRepo(),
    sumRevenueRepo(),
  ]);

  return {
    total_users: totalUsers,
    total_products: totalProducts || 0,
    total_orders: totalOrders || 0,
    total_revenue: revenueResult._sum.total_amount || 0,
  };
};

export { getDashboardSummaryService };
