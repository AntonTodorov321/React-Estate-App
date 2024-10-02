import styles from './CallItem.module.css';

export default function CallItem({
    owner,
    call,
    _createdOn
}) {
    let callAgo;
    const now = Date.now();
    const differenceDate = now - _createdOn;

    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 60;

    if (differenceDate < minute) {
        callAgo = 'just now';
    } else if (differenceDate < hour) {
        const minutesAgo = Math.floor(differenceDate / minute);
        callAgo = `${minutesAgo} minute${minutesAgo > 1 ? "'s" : ''} ago`;
    } else if (differenceDate < day) {
        const hoursAgo = Math.floor(differenceDate / hour);
        callAgo = `${hoursAgo} hour${hoursAgo > 1 ? "'s" : ''} ago`;
    } else {
        const daysAgo = math.floor(differenceDate / day);
        callAgo = `${daysAgo} day${daysAgo > 1 ? "'s" : 0} ago`;
    }

    let callStatusStyle = styles.uncalled;

    if (call.callStatus === 'Picked up') {
        callStatusStyle = styles.pickedUp;
    } else if (call.callStatus === 'Didnt answer') {
        callStatusStyle = styles.didntAnswer;
    } else if (call.callStatus === 'Wrong number') {
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
            <p className={callStatusStyle} style={{color:'black', fontSize:'0.8em'}}>{callAgo}</p>
        </div>
    );
}