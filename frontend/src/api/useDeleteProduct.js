import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useDeleteProduct() {
  const { handleRefreshWindow } = useWindow();

  const handleDeleteProduct = async (productId) => {
    try {
      await axiosInstance.delete(`/product/${productId}`);
      handleRefreshWindow();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleDeleteProduct,
  };
}

export default useDeleteProduct;
