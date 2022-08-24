import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DarkState from "./Context/DarkMode/DarkState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkState>
    {" "}
    <App />
  </DarkState>
);
