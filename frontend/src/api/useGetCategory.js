import { useState } from "react";
import axiosInstance from "../lib/axios";

function useGetCategory() {
  const [categories, setCategories] = useState([]);

  const handleGetCategory = async () => {
    const result = await axiosInstance.get("/category");

    return result.data;
  };
  
  return {
    categories,
    setCategories,
    handleGetCategory,
  };
}

export default useGetCategory;
