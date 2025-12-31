/* eslint-disable react-hooks/exhaustive-deps */
import * as Tabs from "@radix-ui/react-tabs";
import { ShoppingCart, Package, Tag, BarChart3 } from "lucide-react";
import formatRupiah from "../utils/rupiahFormat";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import useGetDashboardSummary from "../api/useGetDashboardSummary";
import { useWindow } from "../context/WindowContext";
import AdminDashboardPesanan from "../components/layout/AdminDashboardPesanan";
import AdminDashboardProduct from "../components/layout/AdminDashboardProduct";
import AdminDashboardCategory from "../components/layout/AdminDashboardCategory";

function AdminDashboardPage() {
  const { auth } = useAuth();
  const [dashboardSummary, setDashboardSummary] = useState();
  const { handleGetDashboardSummary } = useGetDashboardSummary();
  const { refreshWindow } = useWindow();

  useEffect(() => {
    const getDashboardSummary = async () => {
      const summary = await handleGetDashboardSummary();
      setDashboardSummary(summary);
    };

    getDashboardSummary();
  }, [refreshWindow]);

  return (
    <div className="min-h-screen p-8 py-25">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Selamat datang {auth.user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-tema-100 rounded-lg flex items-center justify-center mb-4">
            <ShoppingCart className="w-6 h-6 text-tema-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-1">
            {dashboardSummary?.total_orders}
          </h3>
          <p className="text-gray-600">Total Pesanan</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <Package className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-1">
            {dashboardSummary?.total_orders_dikemas}
          </h3>
          <p className="text-gray-600">Sedang Dikemas</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-1">
            {dashboardSummary?.total_orders_dikirim}
          </h3>
          <p className="text-gray-600">Sedang Dikirim</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-tema-100 rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-tema-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            Rp {formatRupiah(dashboardSummary?.total_revenue)}
          </h3>
          <p className="text-gray-600">Total Pendapatan</p>
        </div>
      </div>

      <Tabs.Root
        defaultValue="pesanan"
        className="bg-white rounded-lg shadow-sm"
      >
        <Tabs.List className="flex border-b border-gray-200 px-6">
          <Tabs.Trigger
            value="pesanan"
            className="cursor-pointer flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-black data-[state=active]:text-tema-600 data-[state=active]:border-b-2 data-[state=active]:border-tema-600 font-semibold transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Pesanan
          </Tabs.Trigger>
          <Tabs.Trigger
            value="produk"
            className="cursor-pointer flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-black data-[state=active]:text-tema-600 data-[state=active]:border-b-2 data-[state=active]:border-tema-600 font-semibold transition-colors"
          >
            <Package className="w-5 h-5" />
            Produk
          </Tabs.Trigger>
          <Tabs.Trigger
            value="kategori"
            className="cursor-pointer flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-black data-[state=active]:text-tema-600 data-[state=active]:border-b-2 data-[state=active]:border-tema-600 font-semibold transition-colors"
          >
            <Tag className="w-5 h-5" />
            Kategori
          </Tabs.Trigger>
        </Tabs.List>

        <div className="p-6">
          <Tabs.Content value="pesanan">
            <AdminDashboardPesanan />
          </Tabs.Content>
          <Tabs.Content value="produk">
            <AdminDashboardProduct />
          </Tabs.Content>
          <Tabs.Content value="kategori">
            <AdminDashboardCategory />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}

export default AdminDashboardPage;
