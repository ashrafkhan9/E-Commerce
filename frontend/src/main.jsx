import React from "react";
import ReactDom from "react-dom/client";

import "./main.css";

import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
