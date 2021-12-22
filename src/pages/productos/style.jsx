const style = {
    //stilo de productos unitarios
    cardUni: {
        backgroundColor: "#aca",
        padding: "20px",
        margin: "0 200px",
        display: "grid",
        gridColumnGap: "50px",
        gridTemplateColumns: "3fr 1fr"
    },
    imgUni: {
        width: "100%"
    },
    cardContentUni: {
        padding: "0"
    },

    //estilo de productos
    cardIndex: {
        margin: "30px",
        display: "grid",
        gridGap: "30px",
        gridTemplateColumns: "repeat(5, 1fr)",
    },
    tituloIndex: {
        textAlign: "center",
        marginTop: "30px"
    },

    //estilo de index
    cardProducto: {
        backgroundColor: "#21bbbb",
        borderRadius: "0.35rem",
        background: "#6994be",
        color: "#fff"
    },
    imgProducto: {
        width: "100%",
        borderRadius: "0.35rem 0.35rem 0 0"
    },
    cardContentProducto: {
        padding: "10px",
    },
    textTachadoProducto: {
        textDecoration: "line-through"
    }
}

export default style;