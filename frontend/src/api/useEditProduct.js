import { useState } from "react";
import axiosInstance from "../lib/axios";
import { useWindow } from "../context/WindowContext";

function useEditProduct() {
  const [editProductError, setEditProductError] = useState("");
  const [editProductLoading, setEditProductLoading] = useState(false);
  const { handleRefreshWindow } = useWindow();

  const handleEditProduct = async (values, id, close) => {
    try {
      setEditProductLoading(true);
      setEditProductError("");

      await axiosInstance.patch(`/product/${id}`, {
        name: values.namaProduk,
        price: values.harga,
        stock: values.stock,
        description: values.deskripsi,
        imageUrl: values.image,
        categoryId: parseInt(values.category),
      });

      setEditProductLoading(false);
      close();
      handleRefreshWindow();
    } catch (error) {
      setEditProductError(error.response.data.error);
    } finally {
      setEditProductLoading(false);
    }
  };

  return {
    handleEditProduct,
    editProductError,
    editProductLoading,
  };
}

export default useEditProduct;
