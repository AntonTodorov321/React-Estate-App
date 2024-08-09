import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/authContext';
import styles from '../css/Auth.module.css';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password'
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
        [RegisterFormKeys.Username]: '',
    });

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>Register</h2>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.Username}>Username:</label>
                        <input
                            type="text"
                            name={RegisterFormKeys.Username}
                            id={RegisterFormKeys.Username}
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.username}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.Email}>Email:</label>
                        <input
                            type="email"
                            name={RegisterFormKeys.Email}
                            id={RegisterFormKeys.Email}
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.email}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.Password}>Password:</label>
                        <input
                            type="password"
                            id={RegisterFormKeys.Password}
                            name={RegisterFormKeys.Password}
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.password}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor={RegisterFormKeys.ConfirmPassword}>Confirm Password:</label>
                        <input
                            type="password"
                            name={RegisterFormKeys.ConfirmPassword}
                            id={RegisterFormKeys.ConfirmPassword}
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.confirmPassword}
                        />
                    </div>

                    <button type="button" className={styles.button} onClick={() => registerSubmitHandler(formValues)}>Register</button>
                </form>
            </div>
        </div>
    )
}