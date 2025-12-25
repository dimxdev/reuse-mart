import { useState } from "react";
import axiosInstance from "../lib/axios";

function useEditCategory() {
  const [editCategoryLoading, setEditCategoryLoading] = useState(false);
  const [editCategoryError, setEditCategoryError] = useState("");

  const handleEditCategory = async (values, id) => {
    try {
      setEditCategoryLoading(true);
      setEditCategoryError("");

      await axiosInstance.patch(`/category/${id}`, {
        name: values.namaCategory,
        description: values.deskripsi,
      });

      setEditCategoryLoading(false);
    } catch (error) {
      setEditCategoryError(error.response.data.error);
    } finally {
      setEditCategoryLoading(false);
    }
  };
  return {
    editCategoryLoading,
    editCategoryError,
    handleEditCategory
  };
}

export default useEditCategory;
