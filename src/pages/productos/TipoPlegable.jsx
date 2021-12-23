import style from "./style";
import Maqueta from "./Maqueta";
//import { Link } from "react-router-dom";

const TipoPlebagle = () => {
    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos Plegable</h2>
            <div style={style.cardIndex}>

                <Maqueta tipo={"plegable"} />
            </div>
        </>
    )
}

export default TipoPlebagle;