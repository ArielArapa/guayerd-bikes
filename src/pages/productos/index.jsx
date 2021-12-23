import { Link } from "react-router-dom";

import img1 from '../../Image/carrera.jpg'
import img2 from '../../Image/plegable.jpg'
import img3 from '../../Image/bmx.jpg'
import img4 from '../../Image/kid.jpg'


const style = {
    cardProducto: {
        height: "250px",
        display: "flex",
        alignItems: "flex-end",
    },
    tituloIndex: {
        textAlign: "center",
        marginTop: "30px",
    },
    cardTipos: {
        margin: "30px",
        display: "grid",
        gridGap: "30px",
        gridTemplateColumns: "repeat(4, 1fr)",
    },
    imgProducto: {
        width: "100%",
        borderRadius: "0.1rem 0.1rem 0 0",

    },
    h3: {
        textAlign: "center",
        paddingBotton: "20px"
    },
    containerImg: {
        backgroundColor: "#fff",
        borderRadius: "0.1rem",

    }
}

const Productos = () => {

    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos</h2>
            <div style={style.cardTipos} >
                <Link to={`carrera`}>
                    <div style={style.containerImg}>
                        <h3 style={style.h3}>Carrera</h3>
                        <div style={style.cardProducto}>
                            <img src={img1} alt="locura" style={style.imgProducto} />
                        </div>
                    </div>
                </Link>

                <Link to={"plegable"}>
                    <div style={style.containerImg}>
                        <h3 style={style.h3}>Plegable</h3>
                        <div style={style.cardProducto}>
                            <img src={img2} alt="locura" style={style.imgProducto} />
                        </div>
                    </div>
                </Link>
                <Link to={"bmx"}>
                    <div style={style.containerImg}>
                        <h3 style={style.h3}>BMX</h3>
                        <div style={style.cardProducto}>
                            <img src={img3} alt="locura" style={style.imgProducto} />
                        </div>
                    </div>
                </Link>
                <Link to={"kid"}>
                    <div style={style.containerImg}>
                        <h3 style={style.h3}>kid</h3>
                        <div style={style.cardProducto}>
                            <img src={img4} alt="locura" style={style.imgProducto} />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Productos;
