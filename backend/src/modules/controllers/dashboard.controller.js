import { getDashboardSummaryService } from "../services/dashboard.service.js";

const getDashboardSummaryController = async (req, res) => {
  try {
    const summary = await getDashboardSummaryService();

    res.status(200).send(summary);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export { getDashboardSummaryController };
