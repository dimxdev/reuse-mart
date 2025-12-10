import { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../lib/axios";

function useRegister() {
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const handleSubmitRegister = async (values) => {
    try {
      setIsRegisterLoading(true);
      setEmailError("");

      await axiosInstance.post("/auth/register/customer", {
        name: values.username,
        email: values.email,
        password: values.password,
      });

      setIsRegisterLoading(false);
      navigate("/login");
      console.log(values.username, values.email, values.password);
    } catch (error) {
      setEmailError(error.response.data.error);
    } finally {
      setIsRegisterLoading(false);
    }
  };

  return {
    handleSubmitRegister,
    isRegisterLoading,
    emailError,
    setEmailError,
  };
}

export default useRegister;
