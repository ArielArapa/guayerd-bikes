const style = {
    containerImg: {
        backgroundColor: "#fff",
        borderRadius: "0.1rem",
    },
    h3: {
        textAlign: "center",
        paddingBotton: "20px"
    },
    imgProducto: {
        width: "100%",
        borderRadius: "0.1rem 0.1rem 0 0",
    },
    cardProducto: {
        height: "250px",
        display: "flex",
        alignItems: "flex-end",
    },
}

const CardsTipos = (props) => {
    return (
        <>
            <div style={style.containerImg}>
                <h3 style={style.h3}>{props.titulo}</h3>
                <div style={style.cardProducto}>
                    <img src={props.img} alt={props.alt} style={style.imgProducto} />
                </div>
            </div>
        </>
    )
}

export default CardsTipos;