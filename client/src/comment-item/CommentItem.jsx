import styles from './CommentItem.module.css';

export default function CommnetItem({
    owner,
    comment
}) {
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <span className={styles.username}>{owner.username}</span>
            </div>
            <div className={styles.content}>
                {comment}
            </div>
        </div>
    );
}