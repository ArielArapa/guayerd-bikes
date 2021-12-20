import './App.css';
import Locura from './pages/productos/ProductoUnitario';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './pages/productos/Productos';
import Contacto from './pages/contacto/Contacto';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="producto" element={<Locura />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes >
      </BrowserRouter>
    </>)
}

export default App;
