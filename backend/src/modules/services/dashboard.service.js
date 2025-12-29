import dashboardRepository from "../repositories/dashboard.repository.js";

class DashboardService {
  async getDashboardSummaryService() {
    const [
      totalUsers,
      totalProducts,
      totalOrders,
      revenueResult,
      totalOrdersDikemas,
      totalOrdersDikirim,
    ] = await Promise.all([
      dashboardRepository.countUsersRepo(),
      dashboardRepository.countProductsRepo(),
      dashboardRepository.countOrdersRepo(),
      dashboardRepository.sumRevenueRepo(),
      dashboardRepository.countOrderDikemas(),
      dashboardRepository.countOrderDikirim(),
    ]);

    return {
      total_users: totalUsers,
      total_products: totalProducts || 0,
      total_orders: totalOrders || 0,
      total_revenue: revenueResult._sum.total_amount || 0,
      total_orders_dikemas: totalOrdersDikemas || 0,
      total_orders_dikirim: totalOrdersDikirim || 0,
    };
  }
}

export default new DashboardService();
