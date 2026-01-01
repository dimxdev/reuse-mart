import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useAddCart() {
  const { handleRefreshWindow } = useWindow();

  const handleAddCart = async (productId) => {
    try {
      await axiosInstance.post("/cart", {
        productId: productId,
      });
      handleRefreshWindow();
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return {
    handleAddCart,
  };
}

export default useAddCart;
