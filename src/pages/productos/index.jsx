import style from "./style";
import Prueba from "./prueba";
import image from '../../Image/bici.jpg'
import { Link } from "react-router-dom";

const Productos = () => {
    const saludar = () => {
        alert("ingresar a mas productos");
        //al hacer click => llevarnos a lista de productos
    }
    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos</h2>
            <div style={style.cardTipos} >
                <div style={style.cardProducto} onClick={saludar}>
                    <img src={image} alt="locura" style={style.imgProducto} />
                    <h3>Titulo</h3>
                </div>
                <div style={style.cardProducto}>
                    <img src={image} alt="locura" style={style.imgProducto} />
                    <h3>Titulo</h3>
                </div>
                <div style={style.cardProducto}>
                    <img src={image} alt="locura" style={style.imgProducto} />
                    <h3>Titulo</h3>
                </div>
                <div style={style.cardProducto}>
                    <img src={image} alt="locura" style={style.imgProducto} />
                    <h3>Titulo</h3>
                </div>
            </div>
            <div style={style.cardIndex}>
                {/* <Producto /> */}
                <Prueba tipo={"carrera"} />
            </div>
        </>
    )
}

export default Productos;
