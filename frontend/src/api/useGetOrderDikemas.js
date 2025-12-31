import axiosInstance from "../lib/axios";

function useGetOrderDikemas() {
  const handleGetOrderDikemas = async () => {
    try {
      const result = await axiosInstance.get("/order/dikemas");
      return result.data;
    } catch (error) {
      console.error("Error fetching dikemas:", error);
      return [];
    }
  };

  return {
    handleGetOrderDikemas,
  };
}

export default useGetOrderDikemas;
