import img1 from "../../Image/instagram.jpg"
import img2 from "../../Image/pinterest.png"
import img3 from "../../Image/twitter.png"
import img4 from "../../Image/descarga.png"
import img5 from "../../Image/facebook.png"

import Logo from "./componente"
import "./Style.css";

const Foter = () => {
  return (
    <>
      <footer>
        <div className="contenedor-de-todo-footer">

          <div className="contenedor-body">
            <div className="colum1">
              <h1>Mas información de la compañia</h1>
              <p>Bicicletas de competición y urbanas. Somos fabricantes de las mejores bicicletas de la región.
                Atención personalizada y venta de accesorios.</p>
            </div>
            <div className="colum2">
              <h1>Redes</h1>
              <div className="contain-icon">
                <Logo href={"https://www.facebook.com/"} src={img5} alt={"logo de facebook"} />
                <Logo href={"https://twitter.com/"} src={img3} alt={"logo de twitter"} />
                <Logo href={"https://www.instagram.com/"} src={img1} alt={"logo de instagram"} />
                <Logo href={"https://ar.pinterest.com/"} src={img2} alt={"logo de pinterest"} />
              </div>
            </div>
            <div className="colum3">
              <h1>Información</h1>
              <div className="icons2">
                <img src={img4} alt="logo de información" />
                <label>
                  Caba,
                  <p> Buenos aires Donde dobla el viento 234</p>
                </label>
              </div>
            </div>
          </div>

        </div>
        <div className="contenedor-body2">
          <div className="copyright">
            © 2021 Todos los Derechos Reservados | <a href="https://www.youtube.com/watch?v=dvgZkm1xWPE">Viva la vida</a>
          </div>
          <div>
            <div className="politica">
              <a href="https://adc.org.ar/wp-content/uploads/2019/06/026-el-derecho-a-la-privacidad-en-argentina-03-2017.pdf"> Derechos de Privacidad |</a>
              <a href="https://support.wix.com/es/article/crear-una-pol%C3%ADtica-de-t%C3%A9rminos-y-condiciones#:~:text=Los%20t%C3%A9rminos%20y%20condiciones%20(%22T%C3%A9rminos,propietario%20de%20una%20p%C3%A1gina%20web.&text=Los%20T%C3%A9rminos%20son%20un%20acuerdo,realizados%20por%20el%20sitio%20web."> Terminos y Condiciones </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Foter