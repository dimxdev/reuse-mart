import { useState } from "react";
import axiosInstance from "../lib/axios";
import { useWindow } from "../context/WindowContext";

function useAddProduct() {
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [addProductError, setAddProductError] = useState("");
  const { handleRefreshWindow, handleCloseHiddenComponent } = useWindow();

  const handleAddProduct = async (values) => {
    try {
      setAddProductLoading(true);
      setAddProductError("");

      const formData = new FormData();
      formData.append("name", values.namaProduk);
      formData.append("price", values.harga);
      formData.append("stock", values.stock);
      formData.append("description", values.deskripsi ?? "");
      formData.append("categoryId", values.category);
      if (values.image?.[0]) {
        formData.append("image", values.image[0]);
      }

      await axiosInstance.post("/product", formData);

      setAddProductLoading(false);
      handleCloseHiddenComponent()
      handleRefreshWindow();
    } catch (error) {
      setAddProductError(error.response.data.error);
    } finally {
      setAddProductLoading(false);
    }
  };
  return {
    addProductError,
    addProductLoading,
    handleAddProduct,
  };
}

export default useAddProduct;
