import Producto from "./Producto"
const es = {
    margin: "30px",
    display: "grid",
    gridGap: "30px",
    gridTemplateColumns: "repeat(5, 1fr)"
}
const Productos = () => (
    <>
        <div style={es}>
            <Producto />
        </div>
    </>
)

export default Productos;
