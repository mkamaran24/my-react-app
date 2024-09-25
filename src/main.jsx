import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import App4 from "./App4.jsx";
import "./App4.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App4 />
  </StrictMode>
);
