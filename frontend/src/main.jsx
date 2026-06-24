import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import { WindowProvider } from "./context/WindowContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WindowProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
          <Toaster position="bottom-right" />
        </BrowserRouter>
      </AuthProvider>
    </WindowProvider>
  </StrictMode>
);
