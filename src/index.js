import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { APISlice } from "./Servcices/ApiSLice";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
      <Router>
        <ApiProvider api={APISlice}>
          <App />
        </ApiProvider>
      </Router>
  </React.StrictMode>
);
