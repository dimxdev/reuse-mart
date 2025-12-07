import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Navbar from "./components/layout/Navbar";

function App() {
  const location = useLocation();

  const noLayoutRoute = ["/login", "/register", "/coret"];
  const renderLayout = !noLayoutRoute.includes(location.pathname);

  return (
    <div className="w-full h-full min-h-screen">
      {renderLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
