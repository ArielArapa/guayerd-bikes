import { Link } from 'react-router-dom';
import style from './style';

const Unitario = () => {
    return (<>
        <nav>
            <Link to="/">Inicio</Link>
        </nav>
        <div style={style.cardUni}>
            <h1>Se encunetra en esta url :</h1>
            {/* <img src={img} alt={titulo} style={style.imgUni} /> */}
            {/* <div style={style.cardContentUni}>
                <h1>{props.nombre}</h1>
                <span >{props.stock}</span>
                <p>Precio actual: $ {props.precio}</p>
                <p>{props.descripcion}</p>
            </div> */}
        </div>
    </>
    )
};


export default Unitario;