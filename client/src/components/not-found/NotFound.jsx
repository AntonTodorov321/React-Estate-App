import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Error 404</h1>
            <p className={styles.message}>The page you are looking for could not be found.</p>
        </div>
    );
};