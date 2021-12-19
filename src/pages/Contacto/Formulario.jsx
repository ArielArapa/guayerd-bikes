import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const ar = {
    div: {
        display: "flex",
        flexDirection: "column",
        padding: "0 2rem",
        margin: "0 5rem"

    },
    input: {
        margin: ".5rem 0"
    },
    button: {
        margin: "20px 0",
        height: "30px"
    }
}

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};
const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

// And now we can use these
const SignupForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    contraseña: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    tema: '', // added for our select
                    consulta: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    contraseña: Yup.string()
                        .min(7, 'Debe contener al menos 7 caracteres')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    tema: Yup.string()
                        .oneOf(
                            ['venta', 'trabajo', 'reparacion', 'otro'],
                            'seleccione un tema'
                        )
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form >
                    <div style={ar.div}>
                        <MyTextInput label="First Name" name="firstName" type="text" placeholder="Jane" style={ar.input} />

                        <MyTextInput label="Contraseña" name="contraseña" type="password" placeholder="Ingresar contraseña" style={ar.input} />

                        <MyTextInput label="Email Address" name="email" type="email" placeholder="example@example.com" style={ar.input} />

                        <MySelect label="Tema" name="tema" style={ar.input}>
                            <option value="">Elegir tema</option>
                            <option value="venta">Venta</option>
                            <option value="trabajo">Trabajo</option>
                            <option value="reparacion">Reparación</option>
                            <option value="otro">Otros</option>
                        </MySelect>

                        <MyTextArea label="Comentario" name="consulta" rows="6" placeholder="Mas detalles" style={ar.input} />

                        <MyCheckbox name="acceptedTerms" style={ar.input}>
                            Acepto términos y condiciones
                        </MyCheckbox>


                        <button type="submit" style={ar.button} >Enviar</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default SignupForm;