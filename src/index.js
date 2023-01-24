import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LikesProvider } from "./context/likes.contex";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LikesProvider>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </LikesProvider>
);
