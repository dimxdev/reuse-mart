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

      const formData = new FormData();
      formData.append("name", values.namaProduk);
      formData.append("price", values.harga);
      formData.append("stock", values.stock);
      formData.append("description", values.deskripsi ?? "");
      formData.append("categoryId", values.category);
      // hanya kirim gambar jika user memilih file baru
      if (values.image?.[0]) {
        formData.append("image", values.image[0]);
      }

      await axiosInstance.patch(`/product/${id}`, formData);

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
