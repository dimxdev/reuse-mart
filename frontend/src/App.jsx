import { Navigate, Route, Routes, useLocation } from "react-router";
import { useAuth } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/layout/Navbar";
import RegisterPage from "./pages/RegisterPage";
import RoleProtectedRoute from "./components/layout/RoleProtectedRoute";
import AddProductForm from "./components/layout/AddProductForm";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/layout/Footer";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import EditProductForm from "./components/layout/EditProductForm";
import AddCategoryForm from "./components/layout/AddCategoryForm";
import EditCategoryForm from "./components/layout/EditCategoryForm";
import AddAdminForm from "./components/layout/AddAdminForm";
import ScrollToTop from "./components/atom/ScrollToTop";
import ForbiddenPage from "./pages/ForbiddenPage";
import CartPage from "./pages/CartPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const location = useLocation();
  const { auth } = useAuth();

  const noLayoutRoute = ["/login", "/register"];
  const renderLayout = !noLayoutRoute.includes(location.pathname);

  return (
    <div className="w-full h-full min-h-screen">
      <ScrollToTop />
      {renderLayout && <Navbar />}

      <Routes>
        {/* UMUM */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/login"
          element={
            !auth.isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate
                to={
                  auth.user?.role === "customer"
                    ? "/dashboard/customer"
                    : auth.user?.role === "admin"
                    ? "/dashboard/admin"
                    : auth.user?.role === "owner"
                    ? "/dashboard/owner"
                    : "/product"
                }
              />
            )
          }
        />
        <Route
          path="/register"
          element={
            !auth.isAuthenticated ? (
              <RegisterPage />
            ) : (
              <Navigate
                to={
                  auth.user?.role === "customer"
                    ? "/dashboard/customer"
                    : auth.user?.role === "admin"
                    ? "/dashboard/admin"
                    : auth.user?.role === "owner"
                    ? "/dashboard/owner"
                    : "/product"
                }
              />
            )
          }
        />

        {/* CUSTOMER */}
        <Route
          path="/dashboard/customer"
          element={
            <RoleProtectedRoute roleDapetIzin={["customer"]}>
              <CustomerDashboardPage />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <RoleProtectedRoute roleDapetIzin={["customer"]}>
              <CartPage />
            </RoleProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/dashboard/admin"
          element={
            <RoleProtectedRoute roleDapetIzin={["admin"]}>
              <AdminDashboardPage />
            </RoleProtectedRoute>
          }
        />

        {/* OWNER */}
        <Route
          path="/dashboard/owner"
          element={
            <RoleProtectedRoute roleDapetIzin={["owner"]}>
              <OwnerDashboardPage />
            </RoleProtectedRoute>
          }
        />
      </Routes>

      {renderLayout && <Footer />}
    </div>
  );
}

export default App;
