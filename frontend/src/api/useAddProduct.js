import { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../lib/axios";

function useAddProduct() {
  const navigate = useNavigate();
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [addProductError, setAddProductError] = useState("");

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
      navigate("/product");
    } catch (error) {
      setAddProductError(error.response.data.error);
    } finally {
      setAddProductLoading(false);
    }
  };
  return {
    addProductError, addProductLoading, handleAddProduct
  };
}

export default useAddProduct;
