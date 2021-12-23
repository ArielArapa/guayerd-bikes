import Image1 from '../../Image/bici.jpg'
import { Link } from 'react-router-dom';
import style from './style';

const Locura = () => {
    const execute = () => alert('click');
    return (<>
        <nav>
            <Link to="/">Inicio</Link>
        </nav>
        <div style={style.cardUni}>
            <img src={Image1} alt="bicicletas" style={style.imgUni} />
            <div style={style.cardContentUni}>
                <h1>Bicicleta nueva</h1>
                <span >24343</span>
                <p>Precio actual: $3212242342</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis eveniet modi eos similique praesentium repudiandae aliquam doloremque culpa, velit non est alias neque nulla itaque tempora in deleniti quae?</p>
                <button onClick={execute}>hola</button>
            </div>
        </div>
    </>
    )
};


export default Locura;