import Producto from "./producto"
import style from "./style";

const Productos = () => (
    <>
        <h2 style={style.tituloIndex} id="Productos">Productos</h2>
        <div style={style.cardIndex}>
            <Producto />
        </div>
    </>
)

export default Productos;
