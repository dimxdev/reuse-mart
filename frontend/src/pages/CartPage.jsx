import { useForm } from "react-hook-form";
import { Trash2, Minus, Plus } from "lucide-react";
import formatRupiah from "../utils/rupiahFormat";
import images from "../assets/assets";
import { useWindow } from "../context/WindowContext";
import DeleteCartAlert from "../components/layout/DeleteCartAlert";
import QRCodePopup from "../components/layout/QRCode";
import useDeleteCart from "../api/useDeleteCart";
import useCart from "../hooks/useCart";

function CartPage() {
  const form = useForm();
  const { handleDeleteCart } = useDeleteCart();
  const { showHiddenComponent, handleShowHiddenComponent } = useWindow();
  const {
    calculateSubtotal,
    cartItems,
    handleOrder,
    handleQuantityChange,
    handleSubmit,
    setShowQr,
    showQR,
  } = useCart();

  return (
    <div className="min-h-screen py-8 pt-25 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Keranjang Belanja
          </h1>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-tema-100 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.product.image_url || images.homepageBg2}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-lg text-tema-600 font-semibold">
                      Rp {formatRupiah(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-tema-500 hover:text-tema-600 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-semibold w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-tema-500 hover:text-tema-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right w-40">
                    <p className="text-xl font-bold text-gray-800">
                      Rp {formatRupiah(item.product.price * item.quantity)}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteCart(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                  >
                    <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length !== 0 && (
            <button
              type="button"
              onClick={handleShowHiddenComponent}
              className="mt-5 bg-red-600 text-tema-50 px-3 py-2 rounded-md cursor-pointer font-bold hover:bg-red-700 transition-all"
            >
              Hapus Semua Cart
            </button>
          )}
          {showHiddenComponent && <DeleteCartAlert />}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Informasi Pengiriman
          </h2>

          <div>
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">
                Nama Penerima
              </label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tema-500 focus:border-tema-500"
                {...form.register("penerima", { required: true })}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">
                Nomor WhatsApp
              </label>
              <input
                type="number"
                placeholder="62..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tema-500 focus:border-tema-500"
                {...form.register("phone", { required: true })}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">
                Alamat Pengiriman
              </label>
              <textarea
                rows={4}
                placeholder="Masukkan alamat lengkap pengiriman"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tema-500 focus:border-tema-500 resize-none"
                {...form.register("address", { required: true })}
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-800 font-semibold mb-3">
                Metode Pembayaran
              </label>
              <div className="bg-gray-50 rounded-lg px-6 py-4 border-2 border-tema-500">
                <p className="text-lg font-semibold text-gray-800">QRIS</p>
              </div>
            </div>

            <div className="border-t pt-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-gray-600">Subtotal:</span>
                <span className="text-xl font-semibold text-gray-800">
                  Rp {formatRupiah(calculateSubtotal())}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-tema-600">
                  Rp {formatRupiah(calculateSubtotal())}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={form.handleSubmit(handleSubmit)}
              className="cursor-pointer w-full bg-tema-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-tema-600 transition-colors"
            >
              Beli Sekarang
            </button>
            {showQR && cartItems.length !== 0 && (
              <QRCodePopup
                onConfirm={() => handleOrder(form.getValues())}
                closeQr={() => setShowQr(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
