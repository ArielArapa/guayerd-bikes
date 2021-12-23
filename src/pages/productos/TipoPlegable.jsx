
import Maqueta from "./Maqueta";
import TipoStyle from "./tipoStyle";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const TipoPlebagle = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
            </nav>
            <h2 style={TipoStyle.tituloIndex} id="Productos">Productos Plegable</h2>
            <div style={TipoStyle.cardIndex}>

                <Maqueta tipo={"plegable"} />
            </div>
        </>
    )
}

export default TipoPlebagle;