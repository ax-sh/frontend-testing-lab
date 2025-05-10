import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// prod
import "virtual:uno.css";

// dev
// // Edit classes in DevTools
// import "uno.css";
// import "virtual:unocss-devtools";

import "./index.scss";
import App from "./App.tsx";
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
