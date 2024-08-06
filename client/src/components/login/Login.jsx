const baseUrl = 'http://localhost:3030/users/login';

import { useState } from 'react';

import styles from './Login.module.css';

export default function () {
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

    const submitHandler = () => {
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(formValues)
        }).then(data => data.json())
            .then(res => console.log(res));
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

                    <button type="button" onClick={submitHandler} className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};