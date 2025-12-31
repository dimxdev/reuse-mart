import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useDeleteCart() {
  const { handleRefreshWindow } = useWindow();
  
  const handleDeleteCart = async (cartId) => {
    try {
      await axiosInstance.delete(`cart/${cartId}`);
      handleRefreshWindow();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleDeleteCart,
  };
}

export default useDeleteCart;
