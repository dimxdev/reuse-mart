import { useState, useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check, Package } from "lucide-react";
import formatRupiah from "../../utils/rupiahFormat";
import getDateOnly from "../../utils/getDateOnly";
import axiosInstance from "../../lib/axios";
import { useWindow } from "../../context/WindowContext";

function AdminDashboardPesanan() {
  const [ordersDikemas, setOrdersDikemas] = useState([]);
  const [ordersDikirim, setOrdersDikirim] = useState([]);
  const { refreshWindow, handleRefreshWindow } = useWindow();

  const handleGetOrderDikemas = async () => {
    try {
      const result = await axiosInstance.get("/order/dikemas");
      return result.data;
    } catch (error) {
      console.error("Error fetching dikemas:", error);
      return []; 
    }
  };

  const handleGetOrderDikirim = async () => {
    try {
      const result = await axiosInstance.get("/order/dikirim");
      return result.data;
    } catch (error) {
      console.error("Error fetching dikirim:", error);
      return [];
    }
  };

  const handleEditOrderStatus = async (orderId, newStatus) => {
    try {
      await axiosInstance.patch(`/order/status/${orderId}`, {
        status: newStatus,
      });
      handleRefreshWindow();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Gagal update status");
    }
  };

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

  const OrderCard = ({ order }) => {
    const [currentStatus, setCurrentStatus] = useState(order.status);

    useEffect(() => {
      setCurrentStatus(order.status);
    }, [order.status]);

    const getStatusColor = (status) => {
      switch (status) {
        case "dikemas":
          return "bg-yellow-500";
        case "dikirim":
          return "bg-blue-500";
        case "sampai":
          return "bg-green-500";
        default:
          return "bg-gray-500";
      }
    };

    const getStatusLabel = (status) => {
      switch (status) {
        case "dikemas":
          return "Dikemas";
        case "dikirim":
          return "Dikirim";
        case "sampai":
          return "Sampai";
        default:
          return status;
      }
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 pb-4 border-b">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              ORD-{order.id}
            </h3>
            <p className="text-gray-600">{order.user?.email}</p>
            <p className="text-sm text-gray-500">
              {getDateOnly(order.created_at)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-600">
              Rp {formatRupiah(order.total_amount)}
            </p>
            <p className="text-sm text-gray-600">
              {order.payment_method.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Informasi Penerima */}
        <div className="mb-4 pb-4 border-b">
          <h4 className="font-semibold text-gray-800 mb-2">
            Informasi Penerima
          </h4>
          <p className="text-gray-700 mb-1">{order.penerima}</p>
          <p className="text-gray-600 text-sm mb-1">{order.phone}</p>
          <p className="text-gray-600 text-sm">{order.address}</p>
        </div>

        {/* Daftar Barang */}
        <div className="mb-4 pb-4 border-b">
          <h4 className="font-semibold text-gray-800 mb-3">
            Barang yang Dibeli
          </h4>
          <div className="space-y-2">
            {order.order_items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded"
              >
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">
                    {item.product.name || `Product #${item.product_id}`}
                  </p>
                  <p className="text-sm text-gray-600">
                    Rp {formatRupiah(item.price)} x {item.quantity}
                  </p>
                </div>
                <p className="text-gray-800 font-semibold">
                  Rp {formatRupiah(item.subtotal)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <span className="text-gray-700 font-semibold">Status:</span>
          <Select.Root
            value={currentStatus}
            onValueChange={(value) => {
              setCurrentStatus(value);
              handleEditOrderStatus(order.id, value);
            }}
          >
            <Select.Trigger
              className={`flex items-center gap-2 px-4 py-2 ${getStatusColor(
                currentStatus
              )} text-white cursor-pointer rounded-full font-medium hover:opacity-90 transition-opacity`}
            >
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <Select.Value>{getStatusLabel(currentStatus)}</Select.Value>
              <Select.Icon>
                <ChevronDown className="w-4 h-4" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                <Select.Viewport className="p-1">
                  <Select.Item
                    value="dikemas"
                    className="px-8 py-2 cursor-pointer hover:bg-yellow-100 rounded relative outline-none flex items-center"
                  >
                    <Select.ItemIndicator className="absolute left-2">
                      <Check className="w-4 h-4" />
                    </Select.ItemIndicator>
                    <Select.ItemText>Dikemas</Select.ItemText>
                  </Select.Item>

                  <Select.Item
                    value="dikirim"
                    className="px-8 py-2 cursor-pointer hover:bg-blue-100 rounded relative outline-none flex items-center"
                  >
                    <Select.ItemIndicator className="absolute left-2">
                      <Check className="w-4 h-4" />
                    </Select.ItemIndicator>
                    <Select.ItemText>Dikirim</Select.ItemText>
                  </Select.Item>

                  <Select.Item
                    value="sampai"
                    className="px-8 py-2 cursor-pointer hover:bg-emerald-100 rounded relative outline-none flex items-center"
                  >
                    <Select.ItemIndicator className="absolute left-2">
                      <Check className="w-4 h-4" />
                    </Select.ItemIndicator>
                    <Select.ItemText>Sampai</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>
    );
  };

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
