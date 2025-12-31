/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Package } from "lucide-react";
import { useWindow } from "../../context/WindowContext";
import useGetOrderDikemas from "../../api/useGetOrderDikemas";
import useGetOrderDikirim from "../../api/useGetOrderDikirim";
import OrderCard from "./OrderCart";

function AdminDashboardPesanan() {
  const [ordersDikemas, setOrdersDikemas] = useState([]);
  const [ordersDikirim, setOrdersDikirim] = useState([]);
  const { handleGetOrderDikemas } = useGetOrderDikemas();
  const { handleGetOrderDikirim } = useGetOrderDikirim();
  const { refreshWindow } = useWindow();
  
  useEffect(() => {
    const loadOrders = async () => {
      const [dikemas, dikirim] = await Promise.all([
        handleGetOrderDikemas(),
        handleGetOrderDikirim(),
      ]);
      setOrdersDikemas(dikemas);
      setOrdersDikirim(dikirim);
    };

    loadOrders();
  }, [refreshWindow]);

  return (
    <div className="space-y-8">
      {/* Section Dikemas */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Pesanan Sedang Dikemas ({ordersDikemas?.length})
          </h2>
        </div>
        {ordersDikemas?.length === 0 ? (
          <p className="text-gray-500 text-center py-8 bg-gray-50 rounded-lg">
            Tidak ada pesanan yang sedang dikemas
          </p>
        ) : (
          <div className="space-y-4">
            {ordersDikemas?.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>

      {/* Section Dikirim */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Pesanan Sedang Dikirim ({ordersDikirim.length})
          </h2>
        </div>
        {ordersDikirim.length === 0 ? (
          <p className="text-gray-500 text-center py-8 bg-gray-50 rounded-lg">
            Tidak ada pesanan yang sedang dikirim
          </p>
        ) : (
          <div className="space-y-4">
            {ordersDikirim?.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboardPesanan;
