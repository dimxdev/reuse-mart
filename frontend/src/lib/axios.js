import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    if (error.response?.status === 403) {
      alert("kamu ga punya akses ke halaman ini bro!");
      window.history.back();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
