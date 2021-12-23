import Contacto from "./Contacto"
import Descont from "./Descuento"
import Foter from "./Footer"
import Headerh from "./Header"
import Historia from "./Historia"
import Productos from "./Productos"

const PagePrincipal = () => {
    return (
        <>

            <Headerh />
            <Descont />
            <Productos />
            <Historia />
            <Contacto />
            <Foter />
        </>
    )
}

export default PagePrincipal;