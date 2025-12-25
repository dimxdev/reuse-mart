import { useState } from "react";
import axiosInstance from "../lib/axios";

function useEditProduct() {
  const [editProductError, setEditProductError] = useState("");
  const [editProductLoading, setEditProductLoading] = useState(false);

  const handleEditProduct = async (values, id) => {
    try {
      setEditProductLoading(true);
      setEditProductError(false);

      await axiosInstance.patch(`/product/${id}`, {
        name: values.namaProduk,
        price: values.harga,
        stock: values.stock,
        description: values.deskripsi,
        imageUrl: values.image,
        categoryId: parseInt(values.category),
      });

      setEditProductLoading(false);
      window.location.href = "/product";
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
