import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const style = {
    cardProducto: {
        backgroundColor: "#21bbbb",
        borderRadius: "0.1rem",
        background: "#6994be",
        color: "#fff"
    },
    imgProducto: {
        width: "100%",
        borderRadius: "0.1rem 0.1rem 0 0"
    },
    cardContentProducto: {
        padding: "10px",
    },
    precio: {
        fontSize: "30px"
    }
}

const Maqueta = ({ tipo }) => {

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
                                <p style={style.precio}>$ {element.precio}</p>
                                <h1>{element.nombre}</h1>
                                <Link to={element.id} >
                                    <button>Ver más</button>
                                </Link>

                                {/* <Link to="producto">Ver más</Link> */}
                            </div>
                        </div>
                    </>)
            })}
        </>
    )
}

export default Maqueta;