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

      await axiosInstance.post("/product", {
        name: values.namaProduk,
        price: values.harga,
        stock: values.stock,
        description: values.deskripsi,
        imageUrl: values.image,
        categoryId: parseInt(values.category),
      });

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
