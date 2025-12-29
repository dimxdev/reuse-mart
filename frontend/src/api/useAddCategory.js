import { useState } from "react";
import axiosInstance from "../lib/axios";
import { useWindow } from "../context/WindowContext";

function useAddCategory() {
  const [addCategoryLoading, setAddCategoryLoading] = useState(false);
  const [addCategoryError, setAddCategoryError] = useState("");
  const { handleRefreshWindow, handleCloseHiddenComponent } = useWindow();

  const handleAddCategory = async (values) => {
    try {
      setAddCategoryLoading(true);
      setAddCategoryError("");

      await axiosInstance.post("/category", {
        name: values.namaCategory,
        description: values.description,
      });

      setAddCategoryLoading(false);
      handleCloseHiddenComponent();
      handleRefreshWindow();
    } catch (error) {
      setAddCategoryError(error.response.data.error);
    } finally {
      setAddCategoryLoading(false);
    }
  };

  return {
    addCategoryLoading,
    addCategoryError,
    handleAddCategory,
  };
}

export default useAddCategory;
