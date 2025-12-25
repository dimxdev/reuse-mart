import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
        </BrowserRouter>
      </AuthProvider>
    </WindowProvider>
  </StrictMode>
);
