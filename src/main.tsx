import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"
import App from "./App.tsx"
import AccordionDemo from "./pages/componentDemo/index.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accordion-demo" element={<AccordionDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
