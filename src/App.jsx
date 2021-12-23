import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PagePrincipal from './pages/PagePrincipal';
import TipoCarrera from './pages/Productos/TipoCarrera';
import TipoBmx from './pages/Productos/TipoBmx';
import TipoPlebagle from './pages/Productos/TipoPlegable';
import TipoKid from './pages/Productos/TipoKid';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePrincipal />} >
          </Route>
          <Route path="carrera" element={<TipoCarrera />} />
          <Route path="bmx" element={<TipoBmx />} />
          <Route path="plegable" element={<TipoPlebagle />} />
          <Route path="kid" element={<TipoKid />} />
        </Routes >
      </BrowserRouter>
    </>)
}

export default App;
