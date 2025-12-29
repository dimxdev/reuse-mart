import { useState } from "react";
import axiosInstance from "../lib/axios";
import { useWindow } from "../context/WindowContext";

function useEditCategory() {
  const [editCategoryLoading, setEditCategoryLoading] = useState(false);
  const [editCategoryError, setEditCategoryError] = useState("");
  const { handleRefreshWindow } = useWindow();

  const handleEditCategory = async (values, id, close) => {
    try {
      setEditCategoryLoading(true);
      setEditCategoryError("");

      await axiosInstance.patch(`/category/${id}`, {
        name: values.namaCategory,
        description: values.deskripsi,
      });

      setEditCategoryLoading(false);
      close()
      handleRefreshWindow();
    } catch (error) {
      setEditCategoryError(error.response.data.error);
    } finally {
      setEditCategoryLoading(false);
    }
  };
  return {
    editCategoryLoading,
    editCategoryError,
    handleEditCategory,
  };
}

export default useEditCategory;
