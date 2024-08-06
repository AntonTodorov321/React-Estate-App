import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/authContext';
import styles from './Login.module.css';

export default function () {

    const { loginSubmitHandler, loginFormValues, changeHandler } = useContext(AuthContext);

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
                            value={loginFormValues.email}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            onChange={changeHandler}
                            value={loginFormValues.password}
                        />
                    </div>

                    <button type="button" onClick={loginSubmitHandler} className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};