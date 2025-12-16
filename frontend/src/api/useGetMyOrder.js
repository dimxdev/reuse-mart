import { useState } from "react";
import axiosInstance from "../lib/axios";

function useGetMyOrder() {
  const [getMyOrderError, setGetMyOrderError] = useState("");
  const [getMyOrderLoading, setGetMyOrderLoading] = useState(false);
  const [myOrder, setMyOrder] = useState([]);

  const handleGetMyOrder = async () => {
    try {
      setGetMyOrderLoading(true);
      setGetMyOrderError("");

      const result = await axiosInstance.get("/order/my-order");
      setGetMyOrderLoading(false);
      // console.log(result.data.data);

      return result.data.data;
    } catch (error) {
      setGetMyOrderError(error.response.data.error);
    }
  };

  return {
    getMyOrderError,
    getMyOrderLoading,
    myOrder,
    setMyOrder,
    handleGetMyOrder,
  };
}

export default useGetMyOrder;
