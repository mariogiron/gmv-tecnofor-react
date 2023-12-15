import { useFormik } from "formik";

const validate = (values: any) => {
    const errors: any = {};

    if (!values.username) {
        // Comprobamos si el campo nombre está incluido
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        // Comprobamos si el campo nombre tiene como máximo 15 caracteres
        errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        // Comprobamos mediante una expresión regular si el email es válido
        errors.email = 'Invalid email address';
    }

    return errors;
};

const EjemploFormik = () => {

    const formik = useFormik({
        initialValues: { username: '', email: '', password: '' },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    });

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {(formik.touched.username && formik.errors.username) &&
                    <p className="error">{formik.errors.username}</p>
                }
            </div>
            <div>
                <label>Email</label>
                <input type="text" id="email" onChange={formik.handleChange}
                    value={formik.values.email} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" id="password" onChange={formik.handleChange}
                    value={formik.values.password} />
            </div>

            <input type="submit" value="Enviar" />
        </form>
    </div>

}

export default EjemploFormik;