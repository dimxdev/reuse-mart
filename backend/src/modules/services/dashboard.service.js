import dashboardRepository from "../repositories/dashboard.repository.js";

class DashboardService {
  async getDashboardSummaryService() {
    const [totalUsers, totalProducts, totalOrders, revenueResult] =
      await Promise.all([
        dashboardRepository.countUsersRepo(),
        dashboardRepository.countProductsRepo(),
        dashboardRepository.countOrdersRepo(),
        dashboardRepository.sumRevenueRepo(),
      ]);

    return {
      total_users: totalUsers,
      total_products: totalProducts || 0,
      total_orders: totalOrders || 0,
      total_revenue: revenueResult._sum.total_amount || 0,
    };
  }
}

export default new DashboardService();
