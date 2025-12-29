import {
  Package,
  User,
  Calendar,
  MapPin,
  CreditCard,
  CheckCircle,
  Phone,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import capitalizeWord from "../utils/capitalizeWord";
import { useEffect } from "react";
import Loading from "../components/atom/Loading";
import formatRupiah from "../utils/rupiahFormat";
import getDateOnly from "../utils/getDateOnly";
import useGetMyOrder from "../api/useGetMyOrder";

function CustomerDashboardPage() {
  const { auth } = useAuth();
  const {
    getMyOrderError,
    getMyOrderLoading,
    myOrder,
    setMyOrder,
    handleGetMyOrder,
  } = useGetMyOrder();

  useEffect(() => {
    const getMyOrder = async () => {
      const myOrder = await handleGetMyOrder();
      setMyOrder(myOrder);
    };

    getMyOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      dikirim: "bg-blue-500",
      dikemas: "bg-yellow-500",
      sampai: "bg-green-500",
    };
    return colors[status?.toLowerCase()] || "bg-gray-500";
  };

  return (
    <div className="w-full py-25">
      <div className="max-w-7xl mx-auto px-10">
        {/* User Profile Card */}
        <div className="mb-10 bg-linear-to-tr from-gray-600 to-tema-400 rounded-md shadow-2xl overflow-hidden transform  transition-transform duration-300">
          <div className="px-8 py-8 flex gap-6 items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 shadow-lg">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-1">
                {capitalizeWord(auth.user.name)}
              </h2>
              <p className="text-tema-100 text-lg mb-2">{auth.user.email}</p>
              <span className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-4 py-1 text-sm text-white font-semibold">
                ✨ Customer Premium
              </span>
            </div>
            <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
              <p className="text-tema-100 text-sm">Total Pesanan</p>
              <p className="text-4xl font-bold text-white">{myOrder.length}</p>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-tema-600 rounded-lg p-2">
              <Package className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold font-playfair-display text-tema-900">
              Riwayat Pesanan
            </h2>
            <div className="flex-1 h-1 bg-linear-to-r from-tema-300 to-transparent rounded-full ml-2"></div>
          </div>

          {/* Orders Grid */}
          <div className="grid gap-6">
            {myOrder.map((order, index) => (
              <div
                key={order.id}
                className="bg-white rounded-t-xl shadow-lg overflow-hidden "
              >
                {/* Order Header */}
                <div className="bg-linear-to-r from-tema-500 to-tema-600 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Pesanan ORD-{String(index + 1).padStart(3, "0")}
                      </h3>
                      <div className="flex items-center gap-2 text-tema-100 text-sm mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{getDateOnly(order.created_at)}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`${getStatusColor(
                      order.status
                    )} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    {order.status}
                  </span>
                </div>

                {/* Order Body */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Penerima */}
                    <div className="bg-tema-50 rounded-xl p-4 border border-tema-200">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-5 h-5 text-tema-600" />
                        <h4 className="font-bold text-tema-900">Penerima</h4>
                      </div>
                      <p className="text-tema-700 ml-7">
                        {capitalizeWord(order.penerima || "")}
                      </p>
                    </div>

                    {/* Alamat */}
                    <div className="bg-tema-50 rounded-xl p-4 border border-tema-200">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-tema-600" />
                        <h4 className="font-bold text-tema-900">
                          Alamat Pengiriman
                        </h4>
                      </div>
                      <p className="text-tema-700 ml-7">
                        {capitalizeWord(order.address)}
                      </p>
                    </div>

                    <div className="bg-tema-50 rounded-xl p-4 border border-tema-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-5 h-5 text-tema-600" />
                        <h4 className="font-bold text-tema-900">
                          Nomor WhatsApp
                        </h4>
                      </div>
                      <p className="text-tema-700 ml-7">
                        +{order.phone || "Tidak tersedia"}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="mb-6">
                    <h4 className="font-bold text-tema-900 mb-3 text-lg">
                      Produk Pesanan
                    </h4>
                    <div className="space-y-2">
                      {order.order_items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center bg-linear-to-r from-tema-50 to-white px-4 py-3 rounded-lg border border-tema-200 hover:border-tema-400 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-tema-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-sm">
                              {item.quantity}x
                            </div>
                            <span className="text-tema-900 font-medium">
                              {item.product.name}
                            </span>
                          </div>
                          <span className="text-tema-700 font-bold">
                            Rp {formatRupiah(item.subtotal)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Summary */}
                  <div className="border-t-2 border-tema-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-tema-700">
                        <CreditCard className="w-5 h-5 text-tema-600" />
                        <span className="font-semibold">Pembayaran:</span>
                        <span className="bg-tema-100 text-tema-700 px-3 py-1 rounded-full text-sm font-bold">
                          {order.payment_method}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-tema-600 text-sm mb-1">
                          Total Pembayaran
                        </p>
                        <p className="text-2xl font-bold text-tema-900">
                          Rp {formatRupiah(order.total_amount)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {myOrder.length === 0 && !getMyOrderLoading && (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <Package className="w-20 h-20 text-tema-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-tema-900 mb-2">
                Belum Ada Pesanan
              </h3>
              <p className="text-tema-600">
                Mulai berbelanja dan pesanan Anda akan muncul di sini
              </p>
            </div>
          )}
        </div>

        {/* Loading and Error States */}
        {getMyOrderLoading && <Loading />}
        {getMyOrderError && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-6 py-4 flex items-center gap-3">
            <div className="bg-red-500 rounded-full p-1">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-red-700 font-medium">{getMyOrderError}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerDashboardPage;
