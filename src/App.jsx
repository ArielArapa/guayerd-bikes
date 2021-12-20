import './App.css';
import Historia from './pages/historia/Componente';
import Descont from "./pages/Descuento/index.jsx";
import Headerh from "././pages/Header"
import Locura from './pages/productos/ProductoUnitario';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './pages/productos/Productos';
import Contacto from './pages/contacto/Contacto';
import Foter from './pages/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Headerh />
        <Descont/>
        <Productos />
        <Historia/>
        <Contacto />
        <Foter />
        <Routes>
          <Route path="producto" element={<Locura />} />
        </Routes >
      </BrowserRouter>
    </>)
}

export default App;
