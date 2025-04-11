import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>  {/* ✅ Wrap inside a div */}
      <Header title="Dewansh1" />
    </div>
  </React.StrictMode>
);
