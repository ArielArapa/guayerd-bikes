import { Link } from "react-router-dom";

import img1 from '../../Image/carrera.jpg'
import img2 from '../../Image/plegable.jpg'
import img3 from '../../Image/bmx.jpg'
import img4 from '../../Image/kid.jpg'

import CardsTipos from "../../components/CardsTipo";

const style = {
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

}

const Productos = () => {

    return (
        <>
            <h2 style={style.tituloIndex} id="Productos">Productos</h2>
            <div style={style.cardTipos} >
                <Link to={`carrera`}>
                    <CardsTipos titulo="Carrera" img={img1} alt="bicicleta de carrera" />
                </Link>

                <Link to={"plegable"}>
                    <CardsTipos titulo="Plegable" img={img2} alt="bicicleta plegable" />
                </Link>

                <Link to={"bmx"}>
                    <CardsTipos titulo="BMX" img={img3} alt="bicicleta BMX" />
                </Link>

                <Link to={"kid"}>
                    <CardsTipos titulo="Kid" img={img4} alt="bicicleta de niños" />
                </Link>
            </div>
        </>
    )
}

export default Productos;
