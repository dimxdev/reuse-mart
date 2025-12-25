import { useState } from "react";
import { useWindow } from "../context/WindowContext";
import axiosInstance from "../lib/axios";

function useAddAdmin() {
  const [addAdminLoading, setAddAdminLoading] = useState(false);
  const [addAdminError, setAddAdminError] = useState("");
  const { handleCloseHiddenComponent, handleRefreshWindow } = useWindow();

  const handleAddAdmin = async (values) => {
    try {
      setAddAdminLoading(true);
      setAddAdminError("");

      await axiosInstance.post("/auth/register/admin", {
        name: values.username,
        email: values.email,
        password: values.password,
      });

      setAddAdminLoading(false);
      handleCloseHiddenComponent();
      handleRefreshWindow();
    } catch (error) {
      setAddAdminError(error.response.data.error);
    } finally {
      setAddAdminLoading(false);
    }
  };

  return {
    addAdminLoading,
    addAdminError,
    handleAddAdmin,
  };
}

export default useAddAdmin;
