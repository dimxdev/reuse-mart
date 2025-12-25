import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useDeleteAdmin() {
  const { handleRefreshWindow } = useWindow();
  const handleDeleteAdmin = async (id) => {
    try {
      await axiosInstance.delete(`/auth/delete/admin/${id}`);
      handleRefreshWindow();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleDeleteAdmin,
  };
}

export default useDeleteAdmin;
