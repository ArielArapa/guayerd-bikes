import style from "./style";
import Maqueta from "./Maqueta";
//import { Link } from "react-router-dom";

const TipoBmx = () => {
    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos BMX</h2>
            <div style={style.cardIndex}>
                {/* <Producto /> */}
                <Maqueta tipo={"bmx"} />
            </div>
        </>
    )
}

export default TipoBmx;