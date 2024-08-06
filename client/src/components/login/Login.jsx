import { useState } from 'react';

import styles from './Login.module.css';

export default function () {
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = () => {
        console.log(formValues);
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
                            name="username"
                            className={styles.input}
                            onChange={changeHandler}
                            value={formValues.username}
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

                    <button type="button" onClick={submitHandler} className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};