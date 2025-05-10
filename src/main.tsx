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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
