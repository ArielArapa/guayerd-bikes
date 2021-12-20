import Producto from "./Producto"
const es = {
    margin: "30px",
    display: "grid",
    gridGap: "30px",
    gridTemplateColumns: "repeat(5, 1fr)",
    titulo: {
        textAlign: "center",
        marginTop: "30px"
    }
}
const Productos = () => (
    <>
        <h2 style={es.titulo} id="Productos">Productos</h2>
        <div style={es}>
            <Producto />
        </div>
    </>
)

export default Productos;
