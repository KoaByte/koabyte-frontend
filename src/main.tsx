import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App'
import './index.css'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')!

// En producción el HTML viene pre-renderizado (ver scripts/prerender.mjs):
// se "hidrata" en vez de volver a pintar desde cero. En desarrollo el contenedor solo
// tiene un comentario (<!--app-html-->), por eso se mira firstElementChild y no hasChildNodes.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
