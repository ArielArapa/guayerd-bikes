import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import style from './style';
import React, { useEffect, useState } from 'react';

const Unitario = () => {
    const { id } = useParams()
    console.log(id)

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
                    <h1>{unitario.nombre}</h1>
                    <span>{unitario.stock}</span>
                    <p>Precio actual: $ {unitario.precio}</p>
                    <p>{unitario.descripcion}</p>
                </div>
            </div>
        </>
    </>
    )
};


export default Unitario;