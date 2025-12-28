import axiosInstance from "../lib/axios";

function useAddOrder() {
  const handleAddOrder = async (formData) => {
    try {
      await axiosInstance.post("/order", {
        address: formData.address,
        phone: formData.phone,
        penerima: formData.penerima
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleAddOrder,
  };
}

export default useAddOrder;
