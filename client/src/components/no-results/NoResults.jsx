import styles from './NoResults.module.css';

export default function NoResults() {
    return (
        <div className={styles.noResults}>
            <p>No estates found matching your criteria</p>
        </div>
    );
};