import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
