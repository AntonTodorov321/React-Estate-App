import styles from './Spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <div className={styles.spinnerCircle}></div>
            <p className={styles.spinnerText}>Loading...</p>
        </div>
    );
}