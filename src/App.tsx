import { Navigate, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'

/**
 * Una ruta por idioma (ver src/i18n/config.ts): "/" en español y "/en/" en inglés.
 * El idioma se deduce de la ruta, así cada versión se pre-renderiza con su propio HTML.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/en" element={<HomeView />} />
      <Route path="/en/*" element={<Navigate to="/en/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
