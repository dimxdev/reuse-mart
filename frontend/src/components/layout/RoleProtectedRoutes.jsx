import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

function RoleProtectedRoutes({ children, roleDapetIzin }) {
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (auth.isLoading) {
    return (
      <div className="w-full h-full min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!roleDapetIzin.includes(auth.user?.role)) {
    return (
      <div className="w-full h-full min-h-screen flex justify-center items-center">
        <div className="bg-tema-400 text-tema-950 px-7 py-10 flex flex-col gap-4 items-center justify-center rounded-md">
          <h1 className="font-bold text-2xl">- 403 Forbidden -</h1>
          <h1>Kamu gk punya akses ke halaman ini bro 🤭</h1>
          <button className="bg-tema-600 px-2 py-1 rounded-md cursor-pointer hover:bg-tema-700 hover:font-bold transition-all" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  }

  return children;
}

export default RoleProtectedRoutes;
