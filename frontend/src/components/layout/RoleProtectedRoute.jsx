import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Loading from "../atom/Loading";
import ForbiddenPage from "../../pages/ForbiddenPage";

function RoleProtectedRoute({ children, roleDapetIzin }) {
  const { auth } = useAuth();

  if (auth.isLoading) {
    return (
      <div className="w-full h-full min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!roleDapetIzin.includes(auth.user?.role)) {
    return <ForbiddenPage />;
  }

  return children;
}

export default RoleProtectedRoute;
