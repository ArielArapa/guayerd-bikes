
import Maqueta from "./Maqueta";
import TipoStyle from "./tipoStyle";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const TipoKid = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
            </nav>
            <h2 style={TipoStyle.tituloIndex} id="Productos">Productos Kid</h2>
            <div style={TipoStyle.cardIndex}>
                {/* <Producto /> */}
                <Maqueta tipo={"kid"} />
            </div>
        </>
    )
}

export default TipoKid;

