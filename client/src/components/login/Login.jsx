import { useContext } from 'react';

import { useFormik } from 'formik';

import { AuthContext } from '../../contexts/authContext';
import { loginSchema } from '../../schemas';
import styles from '../css/Auth.module.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            [LoginFormKeys.Email]: '',
            [LoginFormKeys.Password]: '',
        },
        validationSchema: loginSchema,
        onSubmit: loginSubmitHandler
    });

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor={LoginFormKeys.Email}>Email:</label>
                        <input
                            type="text"
                            name={LoginFormKeys.Email}
                            id={LoginFormKeys.Email}
                            className={`${styles.input} 
                            ${errors.email && touched.email ? styles.inputError : ''}`}
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder='Enter your email'
                        />
                        {errors.email && touched.email &&
                            <p className={styles.errorMessage}>{errors.email}</p>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor={LoginFormKeys.Password}>Password:</label>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            id={LoginFormKeys.Password}
                            className={`${styles.input}
                             ${errors.password && touched.password ? styles.inputError : ''}`}
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            placeholder='Enter your password'
                        />
                        {errors.password && touched.password &&
                            <p className={styles.errorMessage}>{errors.password}</p>}
                    </div>

                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};