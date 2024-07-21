import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>&copy; 2024-{new Date().getFullYear()} - Real Estate App - All Rights Reserved</footer>
    );
};