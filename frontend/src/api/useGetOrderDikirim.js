import axiosInstance from "../lib/axios";

function useGetOrderDikirim() {
  const handleGetOrderDikirim = async () => {
    try {
      const result = await axiosInstance.get("/order/dikirim");
      return result.data;
    } catch (error) {
      console.error("Error fetching dikirim:", error);
      return [];
    }
  };

  return {
    handleGetOrderDikirim,
  };
}

export default useGetOrderDikirim;
