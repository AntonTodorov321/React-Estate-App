import styles from './CallItem.module.css';

export default function CallItem({
    owner,
    call
}) {
    let callStatusStyle;

    if (call.callStatus === 'Picked up') {
        callStatusStyle = styles.pickedUp;
    } else if (call.callStatus === 'Didnt answer') {
        callStatusStyle = styles.didntAnswer;
    } else {
        callStatusStyle = styles.wrongNumber;
    };

    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <span className={styles.username}>{owner.username}</span>
            </div>
            <div className={styles.content}>
                {call.description}
            </div>
            <div className={callStatusStyle}>{call.callStatus}</div>
        </div>
    );
}