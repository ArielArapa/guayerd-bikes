import style from "./style";
import Maqueta from "./Maqueta";
//import { Link } from "react-router-dom";

const TipoKid = () => {
    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos Kid</h2>
            <div style={style.cardIndex}>
                {/* <Producto /> */}
                <Maqueta tipo={"kid"} />
            </div>
        </>
    )
}

export default TipoKid;

