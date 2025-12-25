import axiosInstance from "../lib/axios";

function useGetDashboardSummary() {
  const handleGetDashboardSummary = async () => {
    try {
      const result = await axiosInstance.get("/dashboard/summary");

      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {handleGetDashboardSummary};
}

export default useGetDashboardSummary;
