/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAddOrder from "../api/useAddOrder";
import useGetCart from "../api/useGetCart";
import useEditCart from "../api/useEditCart";
import { useWindow } from "../context/WindowContext";
import { useAuth } from "../context/AuthContext";

// produk bermasalah: stok habis, atau jumlah di cart melebihi stok tersisa
export const hasStockIssue = (item) =>
  item.product.stock < 1 || item.quantity > item.product.stock;

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [showQR, setShowQr] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { handleAddOrder } = useAddOrder();
  const { handleGetCart } = useGetCart();
  const { handleEditCart } = useEditCart();
  const { refreshWindow, handleRefreshWindow, setCartCount } = useWindow();

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

  // hanya hitung produk yang stoknya mencukupi
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) =>
        hasStockIssue(item) ? total : total + item.product.price * item.quantity,
      0
    );
  };

  const cartHasIssue = cartItems.some(hasStockIssue);

  const handleSubmit = () => {
    if (cartHasIssue) {
      toast.error(
        "Ada produk yang stoknya tidak mencukupi. Hapus atau kurangi jumlahnya dulu."
      );
      return;
    }
    setShowQr(true);
  };

  const handleOrder = async (formData) => {
    try {
      await handleAddOrder(formData);
      setShowQr(false);
      handleRefreshWindow();
      navigate(`/dashboard/${auth.user.role}`);
    } catch (error) {
      setShowQr(false);
      alert(
        error.response?.data?.error ?? "Gagal melakukan checkout, coba lagi."
      );
    }
  };

  useEffect(() => {
    const getCart = async () => {
      const items = await handleGetCart();
      setCartItems(items);
      setCartCount(items?.length ?? 0);
    };

    getCart();
  }, [refreshWindow]);

  return {
    cartItems,
    showQR,
    setShowQr,
    handleQuantityChange,
    calculateSubtotal,
    cartHasIssue,
    handleSubmit,
    handleOrder,
  };
}

export default useCart;
