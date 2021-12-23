import style from "./style";
import image from '../../Image/bici.jpg'
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const Productos = () => {
    const saludar = (tipo) => (event) => {
        alert("ingresar a mas productos de " + tipo);
        //al hacer click => llevarnos a lista de productos
    }
    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos</h2>
            <div style={style.cardTipos} >
                <Link to={`carrera`}>
                    <div style={style.cardProducto} onClick={saludar("carrera")}>
                        <img src={image} alt="locura" style={style.imgProducto} />
                        <h3>Carrera</h3>
                    </div>
                </Link>
                <Link to={"plegable"}>
                    <div style={style.cardProducto} onClick={saludar("desplegable")}>
                        <img src={image} alt="locura" style={style.imgProducto} />
                        <h3>Desplegable</h3>
                    </div>
                </Link>
                <Link to={"bmx"}>
                    <div style={style.cardProducto} onClick={saludar("bmx")}>
                        <img src={image} alt="locura" style={style.imgProducto} />
                        <h3>BMX</h3>
                    </div>
                </Link>
                <Link to={"kid"}>
                    <div style={style.cardProducto} onClick={saludar("kid")}>
                        <img src={image} alt="locura" style={style.imgProducto} />
                        <h3>kid</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Productos;
