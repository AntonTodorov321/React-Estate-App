import styles from './CallItem.module.css';

export default function CallItem({
    owner,
    call
}) {
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <span className={styles.username}>{owner.username}</span>
            </div>
            <div className={styles.content}>
                {call.description}
                {call.callStatus}
            </div>
        </div>
    );
}