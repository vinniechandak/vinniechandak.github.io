import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

const container = document.getElementById("root")

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// When react-snap has prerendered the page, the container already holds markup
// and we hydrate it. Otherwise (normal dev / non-prerendered) we mount fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
