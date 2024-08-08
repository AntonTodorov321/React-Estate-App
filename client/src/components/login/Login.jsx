import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/authContext';
import styles from '../Auth.module.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>Login</h2>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor={LoginFormKeys.Email}>Email:</label>
                        <input
                            type="text"
                            name={LoginFormKeys.Email}
                            id={LoginFormKeys.Email}
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.email}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor={LoginFormKeys.Password}>Password:</label>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            id={LoginFormKeys.Password}
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.password}
                        />
                    </div>

                    <button type="button" onClick={() => loginSubmitHandler(formValues)} className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};