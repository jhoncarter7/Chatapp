import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import { SocketContextProvider } from "./context/socketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SocketContextProvider>
        <App />
        </SocketContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
