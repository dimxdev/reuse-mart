/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAddOrder from "../api/useAddOrder";
import useGetCart from "../api/useGetCart";
import useEditCart from "../api/useEditCart";
import { useWindow } from "../context/WindowContext";

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [showQR, setShowQr] = useState(false);
  const { handleAddOrder } = useAddOrder();
  const { handleGetCart } = useGetCart();
  const { handleEditCart } = useEditCart();
  const { refreshWindow, handleRefreshWindow } = useWindow();

  const handleQuantityChange = async (cartId, change) => {
    const item = cartItems.find((i) => i.id === cartId);
    const newQuantity = Math.max(1, item.quantity + change);

    try {
      await handleEditCart(cartId, newQuantity);

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === cartId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleSubmit = () => {
    setShowQr(true);
  };

  const handleOrder = async (formData) => {
    await handleAddOrder(formData);
    setShowQr(false);
    handleRefreshWindow();
  };

  useEffect(() => {
    const getCart = async () => {
      const cartItems = await handleGetCart();
      setCartItems(cartItems);
    };

    getCart();
  }, [refreshWindow]);

  return {
    cartItems,
    showQR,
    setShowQr,
    handleQuantityChange,
    calculateSubtotal,
    handleSubmit,
    handleOrder,
  };
}

export default useCart;
