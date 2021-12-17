import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Debe tener menos 15 caracteres';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Debe tener menos 20 caracteres';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email ingresado invalido';
    }
    return errors;
}

const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' name='firstName' type="text" onChange={formik.handleChange} value={formik.values.firstName} />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' name='lastName' type="text" onChange={formik.handleChange} value={formik.values.lastName} />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );
};

// {
//     "workbench.editorAssociations": {
//         "*.ipynb": "jupyter-notebook"
//     },
//     "notebook.cellToolbarLocation": {
//         "default": "right",
//         "jupyter-notebook": "left"
//     },
//     "liveServer.settings.donotShowInfoMsg": true,
//     "workbench.iconTheme": "material-icon-theme",
//     "[html]": {
//         "editor.defaultFormatter": "vscode.html-language-features"
//     },
//     "editor.formatOnSave": true,
//     "prettier.printWidth": 100,
//     "git.autofetch": true,
//     "liveServer.settings.donotVerifyTags": true,
//     "workbench.colorTheme": "Night Owl",
//     "workbench.productIconTheme": "material-product-icons",
//     "bracket-pair-colorizer-2.colors": [

//         "#fafafa",
//         "#9F51B6",
//         "#F7C244",
//         "#F07850",
//         "#9CDD29",
//         "#C497D4"
//     ],
// }

export default SignupForm;