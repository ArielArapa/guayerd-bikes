import Maqueta from "./Maqueta";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import TipoStyle from "./tipoStyle";

const TipoCarrera = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
            </nav>
            <h2 style={TipoStyle.tituloIndex} id="Productos">Productos Carrera</h2>
            <div style={TipoStyle.cardIndex}>
                {/* <Producto /> */}
                <Maqueta tipo={"carrera"} />
            </div>
        </>
    )
}

export default TipoCarrera;