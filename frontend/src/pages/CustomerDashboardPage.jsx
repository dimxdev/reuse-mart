import { Package, User } from "lucide-react";
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

  return (
    <div className="w-full h-full min-h-screen flex">
      <div className="my-25 w-full px-20">
        <h1 className="text-4xl font-bold font-playfair-display text-gray-800">
          Dashboard Customer
        </h1>
        <div className="mt-5 bg-white border border-tema-100 px-5 py-6 rounded-md flex gap-4 items-center">
          <div className="bg-tema-100 rounded-full px-4 py-4">
            <User className="w-8 h-8 text-tema-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-tema-900">
              {capitalizeWord(auth.user.name)}
            </h1>
            <h1 className="text-tema-600">{auth.user.email}</h1>
            <h1 className="bg-tema-600 rounded-full text-sm text-center w-20 text-white mt-2">
              Customer
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-2">
            <Package className="text-tema-600" />
            <h1 className="text-2xl font-bold font-playfair-display text-tema-900">
              Riwayat pesanan
            </h1>
          </div>
          {myOrder.map((order, index) => (
            <div
              key={order.id}
              className="mt-5 border-2 rounded-md border-tema-600 px-4 py-2 bg-white relative"
            >
              <div>
                <h1 className="text-lg font-bold text-tema-900">
                  Pesanan ORD-{String(index + 1).padStart(3, "0")}
                </h1>
                <h1 className="text-sm text-tema-400">
                  Tanggal: {getDateOnly(order.created_at)}
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="text-lg font-bold text-tema-900">Penerima:</h1>
                <h1 className="text-sm text-tema-400">
                  {capitalizeWord(order.penerima || "")}
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="text-lg font-bold text-tema-900">Alamat:</h1>
                <h1 className="text-sm text-tema-400">
                  {capitalizeWord(order.address)}
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="text-lg font-bold text-tema-900">Produk:</h1>
                {order.order_items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-tema-400 font-bold"
                  >
                    <h1>
                      {item.product.name}({item.quantity})
                    </h1>
                    <h1>Rp {formatRupiah(item.subtotal)}</h1>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between border-t border-tema-200 pt-2 text-lg font-bold text-tema-900">
                <h1>Pembayaran: {order.payment_method}</h1>
                <h1>Total: Rp {formatRupiah(order.total_amount)}</h1>
              </div>
              <h1 className="bg-tema-600 rounded-full px-2 text-sm absolute top-3 right-2 text-white font-bold">
                {order.status}
              </h1>
            </div>
          ))}
        </div>
        {getMyOrderLoading && <Loading />}
        <div className="pl-1 text-sm text-red-500">{getMyOrderError}</div>
      </div>
    </div>
  );
}

export default CustomerDashboardPage;
