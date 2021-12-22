import './App.css';
import Historia from './pages/Historia';
import Descont from "./pages/Descuento";
import Headerh from "././pages/Header"
import Locura from './pages/Productos/productoUnitario';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Foter from './pages/Footer';

const App = () => {
  return (
    <>
      <Headerh />
      <Descont />
      <Productos />
      <Historia />
      <Contacto />
      <Foter />
      <BrowserRouter>
        <Routes>
          <Route path="producto" element={<Locura />} />
        </Routes >
      </BrowserRouter>
    </>)
}

export default App;
