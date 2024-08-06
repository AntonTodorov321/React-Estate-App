import styles from './Login.module.css';

export default function () {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>Login</h2>
                <form>   
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required className={styles.input} />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};