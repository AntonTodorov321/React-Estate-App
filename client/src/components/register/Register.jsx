import { useContext, useState } from 'react';

import { useFormik } from 'formik';
import { registerSchema } from '../../schemas';

import { AuthContext } from '../../contexts/authContext';
import styles from '../css/Auth.module.css';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.Password]: '',
            [RegisterFormKeys.ConfirmPassword]: '',
            [RegisterFormKeys.Username]: '',
        },
        validationSchema: registerSchema,
        onSubmit : registerSubmitHandler
    });

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.Email}>Email:</label>
                        <input
                            type="email"
                            name={RegisterFormKeys.Email}
                            id={RegisterFormKeys.Email}
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
                        <label htmlFor={RegisterFormKeys.Username}>Username:</label>
                        <input
                            type="text"
                            name={RegisterFormKeys.Username}
                            id={RegisterFormKeys.Username}
                            className={`${styles.input} 
                            ${errors.username && touched.username ? styles.inputError : ''}`}
                            onChange={handleChange}
                            value={values.username}
                            onBlur={handleBlur}
                            placeholder='Enter your username'
                        />
                        {errors.username && touched.username &&
                            <p className={styles.errorMessage}>{errors.username}</p>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.Password}>Password:</label>
                        <input
                            type="password"
                            id={RegisterFormKeys.Password}
                            name={RegisterFormKeys.Password}
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

                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.ConfirmPassword}>Confirm Password:</label>
                        <input
                            type="password"
                            name={RegisterFormKeys.ConfirmPassword}
                            id={RegisterFormKeys.ConfirmPassword}
                            className={`${styles.input} 
                            ${errors.confirmPassword && touched.confirmPassword ? styles.inputError : ''}`}
                            onChange={handleChange}
                            value={values.confirmPassword}
                            onBlur={handleBlur}
                            placeholder='Confirm password'
                        />
                        {errors.confirmPassword && touched.confirmPassword &&
                            <p className={styles.errorMessage}>{errors.confirmPassword}</p>}
                    </div>

                    <button type="submit" className={styles.button}>Register</button>
                </form>
            </div>
        </div>
    )
}