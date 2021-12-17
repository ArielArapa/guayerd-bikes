import './App.css';
import Locura from './pages/productos/ProductoUnitario';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './pages/productos/Productos';
import SignupForm from './pages/contacto/Contacto';


const App = () => (
  <>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="producto" element={<Locura />} />
        <Route path="contacto" element={<SignupForm />} />
      </Routes >
    </BrowserRouter>
    {/* agarrar title y usarlo de paramentro, usar tolowercase y convertir los espacios en -  */}
  </>
)

export default App;
