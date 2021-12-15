
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
    const listProducto = [
        {
            title: "Emperor 56 BeQuick",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 54,
            price: 13245,
            currency: "ARS",
        },
        {
            title: "Bueno 56 BeQuick",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 23,
            price: 54322,
            currency: "ARS",
            discountPrice: 8000
        },
        {
            title: "Malo 56 BeQuick",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 21,
            price: 65433,
            currency: "ARS",

        },
        {
            title: "Emperor 21 BeQuick",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 15,
            price: 7544,
            currency: "ARS",
            discountPrice: 8000
        },
        {
            title: "Emperor 56 Loco",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 31,
            price: 6544,
            currency: "ARS",
        },
        {
            title: "Emperor 56 Loco",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 31,
            price: 6544,
            currency: "ARS",
        },
        {
            title: "Emperor 56 Loco",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 31,
            price: 6544,
            currency: "ARS",
        },
        {
            title: "Emperor 56 Loco",
            description: "Bicicleta de competición hecha a medida con lo mejor, cuadro francés Huret talle 'M', cambios y mecánica Shimano (shifters, descarriladores), frenos Weinmann, ruedas Canestrari Super Sport 28', cubiertas Michelin Super Elan, Stem Caymot, pedales Giorgia, asiento italiano Iscaselle. La bicicleta es ultra liviana hecha especialmente para competir, tengo las punteras de los pedales y el porta-botella original, podría llegar a cambiar por una MB,",
            imgUrl: "https://fakeimg.pl/750x400/?text=IOU+A+BIKE",
            inStock: 31,
            price: 6544,
            currency: "ARS",
        },
    ]
    return (
        <>
            {listProducto.map((data) => {
                return (<>
                    <div style={style.card} >
                        <img src={data.imgUrl} alt={data.title} style={style.img} />
                        <div style={style.cardContent}>
                            <span style={style.textTachado}>{data.discountPrice}</span>
                            <p>Precio actual: {data.price}</p>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <Link to="producto">Ver más</Link>
                        </div>
                    </div>
                </>)
            })}
        </>
    )
}

export default Producto;