import React, { useEffect, useState } from "react";
import style from "./style";

const Prueba = ({ tipo }) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Fetch data cuando se monta el componente
        fetch(`https://61c3d07af1af4a0017d990ab.mockapi.io/${tipo}`) //lamada de API y 
            .then((res) => res.json()) //status 200 //  error = 404
            .then((data) => setPosts(data)) // Guarda posts en estado
    }, [tipo]);// <-- No se paso el segundo argumento ([]). que sucederá?

    return (
        <>
            {posts.map((element) => {
                return (
                    <>
                        <div style={style.cardProducto} key={element.id}>
                            <img src={element.img} alt={element.nombre} style={style.imgProducto} />
                            <div style={style.cardContentProducto}>
                                <span>{element.stock}</span>
                                <p>Precio actual: {element.precio}</p>
                                <h1>{element.nombre}</h1>
                                <p>{element.descripcion}</p>
                                <button>Ver más</button>
                                {/* <Link to="producto">Ver más</Link> */}
                            </div>
                        </div>
                    </>)
            })}
        </>
    )
}

export default Prueba;