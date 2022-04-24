import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { RunProvider } from "./hooks/run";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RunProvider>
      <Router>
        <App />
      </Router>
    </RunProvider>
  </React.StrictMode>
);
