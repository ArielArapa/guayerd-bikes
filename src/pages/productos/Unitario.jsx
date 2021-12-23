import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const style = {
    cardUni: {
        backgroundColor: "#fff",
        padding: "20px",
        margin: "0 100px",
        display: "grid",
        gridColumnGap: "20px",
        gridTemplateColumns: "3fr 1fr"
    },
    imgUni: {
        width: "100%"
    },
    cardContentUni: {
        padding: "20px",
        border: "1px solid #999"
    },
    text: {
        margin: "20px 0"
    },
    precio: {
        margin: "20px 0",
        fontSize: "30px"
    }

}

const Unitario = () => {
    const { id } = useParams()

    const [unitario, setUnitario] = useState([]);
    useEffect(() => {
        // Fetch data cuando se monta el componente
        fetch(`https://61c3d07af1af4a0017d990ab.mockapi.io/carrera/${id}`) //lamada de API y 
            .then((res) => res.json()) //status 200 //  error = 404
            .then((data) => setUnitario(data)) // Guarda posts en estado
    }, [id]);// <-- No se paso el segundo argumento ([]). que sucederá?


    return (<>
        <nav>
            <Link to="/">Inicio</Link>
        </nav>

        <>
            <div style={style.cardUni}>
                <img src={unitario.img} alt={unitario.nombre} style={style.imgUni} />
                <div style={style.cardContentUni}>
                    <h1 style={style.text}>{unitario.nombre}</h1>
                    <p style={style.precio}>$ {unitario.precio}</p>
                    <span style={style.text}>Cantidad en stock: {unitario.stock}</span>
                    <p style={style.text}>{unitario.descripcion}</p>
                </div>
            </div>
        </>
    </>
    )
};


export default Unitario;