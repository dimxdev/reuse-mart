import axiosInstance from "../lib/axios";

function useGetCart() {
  const handleGetCart = async () => {
    try {
      const result = await axiosInstance.get("/cart");

      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleGetCart
  };
}

export default useGetCart;
