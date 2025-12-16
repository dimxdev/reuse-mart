import { useState } from "react";
import axiosInstance from "../lib/axios";

function useGetProduct() {
  const [productData, setProductData] = useState([]);
  const [getProductLoading, setGetProductLoading] = useState(false);
  const [getProductError, setGetProductError] = useState("");

  const handleGetProduct = async () => {
    try {
      setGetProductError("");
      setGetProductLoading(true);
      const result = await axiosInstance.get("/product");

      setGetProductLoading(false);

      return result.data;
    } catch (error) {
      setGetProductError(error.response.data.error);
    } finally {
      setGetProductLoading(false);
    }
  };

  return {
    productData,
    getProductLoading,
    getProductError,
    handleGetProduct,
    setProductData,
  };
}

export default useGetProduct;
