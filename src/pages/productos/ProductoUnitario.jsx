import Image1 from '../../image/bici.jpg'
import { Link } from 'react-router-dom';

const es = {

    card: {
        backgroundColor: "#aca",
        padding: "20px",
        margin: "0 200px",
        display: "grid",
        gridColumnGap: "50px",
        gridTemplateColumns: "3fr 1fr"
    },
    img: {
        width: "100%"
    },
    cardContent: {
        padding: "0"
    }
}
const Locura = () => (
    <>
        <nav>
            <Link to="/">Inicio</Link>
        </nav>
        <div style={es.card}>
            <img src={Image1} alt="bicicletas" style={es.img} />
            <div style={es.cardContent}>
                <h1>Bicicleta nueva</h1>
                <span >24343</span>
                <p>Precio actual: $3212242342</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis eveniet modi eos similique praesentium repudiandae aliquam doloremque culpa, velit non est alias neque nulla itaque tempora in deleniti quae?</p>
            </div>
        </div>
    </>
);


export default Locura;