import axiosInstance from "../lib/axios";

function useAddOrder() {
  const handleAddOrder = async (formData) => {
    await axiosInstance.post("/order", {
      address: formData.address,
      phone: formData.phone,
      penerima: formData.penerima,
    });
  };
  return {
    handleAddOrder,
  };
}

export default useAddOrder;
