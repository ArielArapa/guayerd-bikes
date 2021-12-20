import SignupForm from "./Formulario";

const ar = {
    div: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem",
        marginBotton: "40px"

    },
    form: {
        backgroundColor: "#6994be",
    },
    titulo: {
        textAlign: "center",
        marginTop: "30px"
    },
    container: {
        backgroundColor: "#fff",
        
    }

}

const Contacto = () => {

    return (
        <>
            <div style={ar.container}>
                <h2 style={ar.titulo} id="Contacto">Contacto</h2>
                <div style={ar.div}>
                    <div style={ar.form} >
                        <SignupForm />
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5121713443523!2d-58.450058184770626!3d-34.59120818046279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1sen!2sar!4v1639914597119!5m2!1sen!2sar" width="400" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto;