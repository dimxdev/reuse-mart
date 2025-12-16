import { useState } from "react";
import axiosInstance from "../lib/axios";

function useGetProductById() {
  const [product, setProduct] = useState({});
  const [getProductByIdLoading, setGetProductByIdLoading] = useState(false);
  const [getProductByIdError, setGetProductByIdError] = useState("");

  const handleGetProductById = async (id) => {
    try {
      setGetProductByIdError("");
      setGetProductByIdLoading(true);
      const result = await axiosInstance.get(`/product/${id}`);

      setGetProductByIdLoading(false);
      return result.data;
    } catch (error) {
      setGetProductByIdError(error.response.data.error);
    } finally {
      setGetProductByIdLoading(false);
    }
  };

  return {
    product,
    getProductByIdLoading,
    getProductByIdError,
    setProduct,
    handleGetProductById,
  };
}

export default useGetProductById;
