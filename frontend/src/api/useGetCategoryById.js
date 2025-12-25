import { useState } from "react";
import axiosInstance from "../lib/axios";

function useGetCategoryById() {
  const [getCategoryByIdLoading, setGetCategoryByIdLoading] = useState(false);
  const [getCategoryByIdError, setGetCategoryByIdError] = useState("");

  const handleGetCategoryById = async () => {
    try {
      setGetCategoryByIdLoading(true);
      setGetCategoryByIdError("");

      const result = await axiosInstance.get("/category/2");

      setGetCategoryByIdLoading(false);
      return result.data;
    } catch (error) {
      setGetCategoryByIdError(error.response.data.error);
    } finally {
      setGetCategoryByIdLoading(false);
    }
  };

  return {
    getCategoryByIdError,
    getCategoryByIdLoading,
    handleGetCategoryById,
  };
}

export default useGetCategoryById;
