import axiosInstance from "../lib/axios";

function useAddCart() {
  const handleAddCart = async (productId) => {
    try {
      await axiosInstance.post("/cart", {
        productId: productId,
      });
      console.log("berhasil");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return {
    handleAddCart
  };
}

export default useAddCart;
