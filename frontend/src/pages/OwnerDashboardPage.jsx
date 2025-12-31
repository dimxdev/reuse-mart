/* eslint-disable react-hooks/exhaustive-deps */
import formatRupiah from "../utils/rupiahFormat";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import AddAdminForm from "../components/layout/AddAdminForm";
import { useEffect } from "react";
import useGetAdmin from "../api/useGetAdmin";
import useDeleteAdmin from "../api/useDeleteAdmin";
import useGetDashboardSummary from "../api/useGetDashboardSummary";
import { useWindow } from "../context/WindowContext";
import exportPDF from "../utils/exportPDF";
import {
  DollarSign,
  TrendingUp,
  ShoppingBag,
  Users,
  ShoppingCart,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyRevenueData = [
  { month: "Jan", revenue: 2500000 },
  { month: "Feb", revenue: 3200000 },
  { month: "Mar", revenue: 2800000 },
  { month: "Apr", revenue: 3500000 },
  { month: "Mei", revenue: 4100000 },
  { month: "Jun", revenue: 3950000 },
];

function OwnerDashboardPage() {
  const { auth } = useAuth();
  const [admin, setAdmin] = useState([]);
  const [dashboardSummary, setDashboardSummary] = useState();
  const { handleGetAdmin } = useGetAdmin();
  const { handleDeleteAdmin } = useDeleteAdmin();
  const { handleGetDashboardSummary } = useGetDashboardSummary();
  const { refreshWindow, showHiddenComponent, handleShowHiddenComponent } =
    useWindow();

  useEffect(() => {
    const getAdmin = async () => {
      const admin = await handleGetAdmin();
      setAdmin(admin);
    };

    getAdmin();
  }, [refreshWindow]);

  useEffect(() => {
    const getDashboardSummary = async () => {
      const summary = await handleGetDashboardSummary();
      setDashboardSummary(summary);
    };

    getDashboardSummary();
  }, []);

  return (
    <div className="min-h-screen pt-25 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Owner Dashboard
        </h1>
        <p className="text-gray-600">Selamat datang boss {auth.user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-tema-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-tema-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-tema-600" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Rp {formatRupiah(dashboardSummary?.total_revenue)}
          </h3>
          <p className="text-tema-600 text-sm">+20.3% dari bulan lalu</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-tema-100 rounded-lg flex items-center justify-center mb-4">
            <ShoppingCart className="w-6 h-6 text-tema-600" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Total Orders</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {dashboardSummary?.total_orders}
          </h3>
          <p className="text-gray-500 text-sm">Semua pesanan</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Total Products</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {dashboardSummary?.total_products}
          </h3>
          <p className="text-gray-500 text-sm">Semua product</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Active Customers</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {dashboardSummary?.total_users}
          </h3>
          <p className="text-gray-500 text-sm">Pengguna terdaftar</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Monthly Revenue
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyRevenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              stroke="#9ca3af"
              style={{ fontSize: "14px" }}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: "14px" }}
              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip
              formatter={(value) => formatRupiah(value)}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: "#10b981", r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Management</h2>
          <button
            onClick={handleShowHiddenComponent}
            className="px-4 py-2 cursor-pointer bg-tema-500 text-white rounded-lg font-medium hover:bg-tema-600 transition-colors"
          >
            + Add Admin
          </button>
        </div>
        <div className="space-y-2">
          {admin.map((admin, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-tema-100 rounded-lg"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{admin.email}</h3>
                <p className="text-gray-600 text-sm">{admin.name}</p>
              </div>
              <button
                onClick={() => handleDeleteAdmin(admin.id)}
                className="p-2 bg-white cursor-pointer hover:bg-red-100 rounded-lg transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 group-hover:text-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        {showHiddenComponent && <AddAdminForm />}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Export Report</h2>
        <p className="text-gray-600 mb-6">
          Download laporan lengkap dalam format PDF
        </p>
        <button
          onClick={() =>
            exportPDF(
              dashboardSummary.total_revenue,
              dashboardSummary.total_orders,
              dashboardSummary.total_products,
              dashboardSummary.total_users
            )
          }
          className="cursor-pointer px-6 py-3 bg-tema-500 text-white rounded-lg font-medium hover:bg-tema-600 transition-colors"
        >
          Export Report
        </button>
      </div>
    </div>
  );
}

export default OwnerDashboardPage;
