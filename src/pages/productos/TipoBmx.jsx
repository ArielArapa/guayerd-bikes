
import Maqueta from "./Maqueta";
import { Link } from "react-router-dom";
import TipoStyle from "./tipoStyle";

const TipoBmx = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
            </nav>
            <h2 style={TipoStyle.tituloIndex} id="Productos">Productos BMX</h2>
            <div style={TipoStyle.cardIndex}>
                {/* <Producto /> */}
                <Maqueta tipo={"bmx"} />
            </div>
        </>
    )
}

export default TipoBmx;