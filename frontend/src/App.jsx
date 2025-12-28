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
import About from "./pages/About";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import EditProductForm from "./components/layout/EditProductForm";
import AddCategoryForm from "./components/layout/AddCategoryForm";
import EditCategoryForm from "./components/layout/EditCategoryForm";
import AddAdminForm from "./components/layout/AddAdminForm";
import ScrollToTop from "./components/atom/ScrollToTop";
import ForbiddenPage from "./pages/ForbiddenPage";
import CartPage from "./pages/CartPage";

function App() {
  const location = useLocation();
  const { auth } = useAuth();

  const noLayoutRoute = ["/login", "/register", "/editproduct"];
  const renderLayout = !noLayoutRoute.includes(location.pathname);

  return (
    <div className="w-full h-full min-h-screen">
      <ScrollToTop />
      {renderLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<About />} />
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

        <Route
          path="/dashboard/customer"
          element={
            <RoleProtectedRoute roleDapetIzin={["customer"]}>
              <CustomerDashboardPage />
            </RoleProtectedRoute>
          }
        />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/editproduct" element={<EditProductForm />} />
        <Route path="/addcategory" element={<AddCategoryForm />} />
        <Route path="/editcategory" element={<EditCategoryForm />} />

        <Route path="/addadmin" element={<AddAdminForm />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="/dashboard/owner" element={<OwnerDashboardPage />} />
        {/* <Route
          path="/dashboard/owner"
          element={
            <RoleProtectedRoute roleDapetIzin={["owner"]}>
              <OwnerDashboardPage />
            </RoleProtectedRoute>
          }
        /> */}
      </Routes>

      {renderLayout && <Footer />}
    </div>
  );
}

export default App;
