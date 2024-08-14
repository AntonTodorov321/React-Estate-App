import styles from './CommentItem.module.css';

export default function CommnetItem({
    username,
    comment
}) {
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <span className={styles.username}>{username}</span>
            </div>
            <div className={styles.content}>
                {comment}
            </div>
        </div>
    );
}