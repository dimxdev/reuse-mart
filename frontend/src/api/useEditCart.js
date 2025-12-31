import axiosInstance from "../lib/axios";

function useEditCart() {
  const handleEditCart = async (cartId, newQuantity) => {
    try {
      await axiosInstance.patch(`/cart/${cartId}`, {
        quantity: newQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleEditCart,
  };
}

export default useEditCart;
