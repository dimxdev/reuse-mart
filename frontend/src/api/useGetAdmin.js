import axiosInstance from "../lib/axios";

function useGetAdmin() {
  const handleGetAdmin = async () => {
    try {
      const result = await axiosInstance.get("/auth/admin");

      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleGetAdmin,
  };
}

export default useGetAdmin;
