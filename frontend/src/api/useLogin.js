import { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../lib/axios";

function useLogin() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleSubmitLogin = async (values) => {
    try {
      setEmailError("");
      setPasswordError("");
      setLoginLoading(true);

      const responseLogin = await axiosInstance.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      setLoginLoading(false);

      const { user, token } = responseLogin.data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "customer") {
        navigate("/dashboard/customer");
      } else if (user.role === "admin") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/owner");
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response.data.error === "email belum terdaftar") {
        setEmailError(error.response.data.error);
      } else {
        setPasswordError(error.response.data.error);
      }
    } finally {
      setLoginLoading(false);
    }
  };

  return {
    handleSubmitLogin,
    emailError,
    passwordError,
    loginLoading
  };
}

export default useLogin;
