import toast from "react-hot-toast";
import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useAddCart() {
  const { handleRefreshWindow } = useWindow();

  const handleAddCart = async (productId) => {
    try {
      const result = await axiosInstance.post("/cart", {
        productId: productId,
      });
      handleRefreshWindow();

      const productName = result.data.data?.product?.name;
      toast.success(`Berhasil menambahkan ${productName} ke keranjang`);
    } catch (error) {
      toast.error(error.response?.data?.error ?? "Gagal menambahkan ke keranjang");
    }
  };

  return {
    handleAddCart,
  };
}

export default useAddCart;
