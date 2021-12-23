import style from "./style";
import Maqueta from "./Maqueta";
//import { Link } from "react-router-dom";

const TipoCarrera = () => {
    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos Carrera</h2>
            <div style={style.cardIndex}>
                {/* <Producto /> */}
                <Maqueta tipo={"carrera"} />
            </div>
        </>
    )
}

export default TipoCarrera;