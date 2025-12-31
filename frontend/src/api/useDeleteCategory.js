import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useDeleteCategory() {
  const { handleRefreshWindow } = useWindow();

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axiosInstance.delete(`/category/${categoryId}`);
      handleRefreshWindow();
    } catch (error) {
      console.log(error);
    }
  };
  
  return {
    handleDeleteCategory,
  };
}

export default useDeleteCategory;
