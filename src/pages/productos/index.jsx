import Producto from "./producto"
import style from "./style";
import Prueba from "./prueba";

const Productos = () => (
    <>
        <h2 style={style.tituloIndex} id="Productos">Productos</h2>
        <div style={style.cardIndex}>
            {/* <Producto /> */}
            <Prueba tipo={"carrera"} />
        </div>
    </>
)

export default Productos;
