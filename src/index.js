// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SongsContextProvider from "./context/SOngsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SongsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SongsContextProvider>
);
