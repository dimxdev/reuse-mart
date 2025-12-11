import { Navigate, Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Navbar from "./components/layout/Navbar";
import Register from "./pages/Register";
import RoleProtectedRoute from "./components/layout/RoleProtectedRoute";
import AddProductForm from "./components/layout/AddProductForm";
import { useAuth } from "./context/AuthContext";
import About from "./pages/About";
import OwnerDashboard from "./pages/OwnerDashboard";

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
        <Route path="/about" element={<About />} />
        <Route path="/ownerdashboard" element={<OwnerDashboard />} />
        <Route
          path="/login"
          element={
            !auth.isAuthenticated ? (
              <Login />
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
        <Route path="/addproduct" element={<AddProductForm />} />{" "}
        <Route
          path="/register"
          element={
            !auth.isAuthenticated ? (
                <Register />
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
    </div>
  );
}

export default App;
