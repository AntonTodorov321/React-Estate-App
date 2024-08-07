import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/authContext';
import styles from './Login.module.css';

export default function Login () {
    const { loginSubmitHandler } = useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
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
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="email"
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.email}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
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