import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import PersonalWebsite from "./personal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersonalWebsite />
  </StrictMode>
);
