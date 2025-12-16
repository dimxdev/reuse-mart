import { Navigate, Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/layout/Navbar";
import RegisterPage from "./pages/RegisterPage";
import RoleProtectedRoute from "./components/layout/RoleProtectedRoute";
import AddProductForm from "./components/layout/AddProductForm";
import { useAuth } from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/layout/Footer";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import About from "./pages/About";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";

function App() {
  const location = useLocation();
  const { auth } = useAuth();

  const noLayoutRoute = ["/login", "/register"];
  const renderLayout = !noLayoutRoute.includes(location.pathname);

  return (
    <div className="w-full h-full min-h-screen">
      {renderLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/owner" element={
          <RoleProtectedRoute roleDapetIzin={["owner"]}>
            <OwnerDashboardPage />
          </RoleProtectedRoute>
        } />
        <Route path="/dashboard/customer" element={
          <RoleProtectedRoute roleDapetIzin={["customer"]}>
            <CustomerDashboardPage />
          </RoleProtectedRoute>
        } />

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
      </Routes>

      {renderLayout && <Footer />}
    </div>
  );
}

export default App;
