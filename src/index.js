import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GamesProvider } from "./context/games.contex";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GamesProvider>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </GamesProvider>
);
