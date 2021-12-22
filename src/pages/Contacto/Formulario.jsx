import style from './style';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


const MyTextInput = ({ label, ...props }) => {
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

const SignupForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    contraseña: '',
                    email: '',
                    acceptedTerms: false,
                    tema: '',
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
                    <div style={style.divForm}>
                        <MyTextInput label="Nombre" name="firstName" type="text" style={style.input} />

                        <MyTextInput label="Contraseña" name="contraseña" type="password" style={style.input} />

                        <MyTextInput label="Email" name="email" type="email" style={style.input} />

                        <MySelect label="Tema" name="tema" style={style.input}>
                            <option value="">Elegir tema</option>
                            <option value="venta">Venta</option>
                            <option value="trabajo">Trabajo</option>
                            <option value="reparacion">Reparación</option>
                            <option value="otro">Otros</option>
                        </MySelect>

                        <MyTextArea label="Comentario" name="consulta" rows="6" style={style.input} />

                        <MyCheckbox name="acceptedTerms" style={style.input}>
                            Acepto términos y condiciones
                        </MyCheckbox>


                        <button type="submit" style={style.button} >Enviar</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default SignupForm;