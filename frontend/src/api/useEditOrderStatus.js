import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useEditOrderStatus() {
  const { handleRefreshWindow } = useWindow();

  const handleEditOrderStatus = async (orderId, newStatus) => {
    try {
      await axiosInstance.patch(`/order/status/${orderId}`, {
        status: newStatus,
      });
      handleRefreshWindow();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Gagal update status");
    }
  };

  return {
    handleEditOrderStatus,
  };
}

export default useEditOrderStatus;
