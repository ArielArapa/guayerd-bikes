import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
const style = {
    card: {
        backgroundColor: "#21bbbb",
        borderRadius: "0.35rem",
        background: "#6994be",
    },
    img: {
        width: "100%",
        borderRadius: "0.35rem 0.35rem 0 0"
    },
    cardContent: {
        padding: "10px",
    },
    textTachado: {
        textDecoration: "line-through"
    }
}

const Producto = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch data cuando se monta el componente
        fetch("https://demo2420474.mockable.io/productList") //lamada de API y 
            .then((res) => res.json()) //status 200 //  error = 404
            .then((data) => setPosts(data)) // Guarda posts en estado
    }, [setPosts]);// <-- No se paso el segundo argumento ([]). que sucederá?

    return (
        <>
            {posts.map((element) => {
                return (
                    <>
                        <div style={style.card} key={element.title}>
                            <img src={element.imgUrl} alt={element.title} style={style.img} />
                            <div style={style.cardContent}>
                                <span style={style.textTachado}>{element.discountPrice}</span>
                                <p>Precio actual: {element.price}</p>
                                <h1>{element.title}</h1>
                                <p>{element.description}</p>
                                <Link to="producto">Ver más</Link>
                            </div>
                        </div>
                    </>)
            })}
        </>
    )
}

export default Producto;