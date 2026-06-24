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
    cartHasIssue,
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
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Keranjang Belanja
          </h1>

          <div className="space-y-4">
            {cartItems.map((item) => {
              const isOutOfStock = item.product.stock < 1;
              const isOverStock =
                !isOutOfStock && item.quantity > item.product.stock;
              const hasIssue = isOutOfStock || isOverStock;

              return (
                <div
                  key={item.id}
                  className={`rounded-lg p-4 md:p-6 shadow-sm transition-all ${
                    hasIssue
                      ? "bg-gray-100 border border-red-200"
                      : "bg-tema-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src={item.product.image_url || images.homepageBg2}
                      alt={item.product.name}
                      className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg shrink-0 ${
                        isOutOfStock ? "grayscale opacity-50" : ""
                      }`}
                    />

                    <div
                      className={`flex-1 min-w-0 ${
                        isOutOfStock ? "opacity-50" : ""
                      }`}
                    >
                      <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-sm md:text-lg text-tema-600 font-semibold">
                        Rp {formatRupiah(item.product.price)}
                      </p>

                      {/* keterangan stok */}
                      {isOutOfStock && (
                        <span className="inline-block mt-1 text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                          Stok Habis
                        </span>
                      )}
                      {isOverStock && (
                        <span className="inline-block mt-1 text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">
                          Stok tersisa {item.product.stock}, kurangi jumlahnya
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-3 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={isOutOfStock || item.quantity <= 1}
                          className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-tema-500 hover:text-tema-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-base md:text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          disabled={
                            isOutOfStock || item.quantity >= item.product.stock
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-tema-500 hover:text-tema-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div
                        className={`text-right ${
                          isOutOfStock ? "opacity-50" : ""
                        }`}
                      >
                        <p className="text-base md:text-xl font-bold text-gray-800">
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
                </div>
              );
            })}
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

        <div className="bg-white rounded-lg p-5 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
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
                <span className="text-base md:text-lg text-gray-600">Subtotal:</span>
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  Rp {formatRupiah(calculateSubtotal())}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl md:text-2xl font-bold text-gray-800">Total:</span>
                <span className="text-xl md:text-2xl font-bold text-tema-600">
                  Rp {formatRupiah(calculateSubtotal())}
                </span>
              </div>
            </div>

            {cartHasIssue && (
              <p className="text-sm text-red-600 mb-2 text-center">
                Ada produk yang stoknya tidak mencukupi. Hapus atau kurangi
                jumlahnya sebelum checkout.
              </p>
            )}
            <button
              type="button"
              disabled={cartHasIssue}
              onClick={form.handleSubmit(handleSubmit)}
              className="cursor-pointer w-full bg-tema-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-tema-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
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
