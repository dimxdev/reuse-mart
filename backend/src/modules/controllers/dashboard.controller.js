import dashboardService from "../services/dashboard.service.js";

class DashboardController{
  async getDashboardSummaryController(req, res) {
    try {
      const summary = await dashboardService.getDashboardSummaryService();
  
      res.status(200).send(summary);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };

}

export default new DashboardController();
