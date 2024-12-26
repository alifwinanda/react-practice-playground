import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"
import App from "./App.tsx"
import AccordionDemo from "./pages/componentDemo/AccordionDemo/index.tsx"
import ModalDemoPage from "./pages/componentDemo/ModalDemo/index.tsx"
import SandboxDans from "./pages/Practices/SandboxDans/index.tsx"
import { Provider } from "react-redux"
import store from "./store/store.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/accordion-demo" element={<AccordionDemo />} />
          <Route path="/modal-demo" element={<ModalDemoPage />} />
          <Route path="/sandbox" element={<SandboxDans />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
