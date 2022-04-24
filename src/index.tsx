import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { RunProvider } from "./hooks/run";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RunProvider>
    <Router>
      <ToastContainer theme="colored" position="top-center" />
      <App />
    </Router>
  </RunProvider>
);
