import styles from './CallModal.module.css';

export default function CallModal({
    contacts,
    username,
    createdOn
}) {
    return (
        <div className={styles.modalContainer} >
            <div className={styles.modalContent}>
                <p>{username}: {contacts}</p>
                <label htmlFor='description'>Description</label>
                <textarea rows='4' />
                <p>Call status</p>
                <label htmlFor='didntAnswer'>Didn't answer</label>
                <input type='radio' id='didntAnswer' value='didntAnswer' />
                <label htmlFor='wrongNumber'>Wrong Number</label>
                <input type='radio' id='wrongNumber' value='wrongNumber' />
                <label htmlFor='pickUp'>Pick up</label>
                <input type='radio' id='pickUp' value='pickUp' />
                <p>View status</p>
                <label htmlFor='canSee'>Can see it</label>
                <input type='radio' id='canSee' value='canSee' />
                <label htmlFor='cannotSee'>Can't see it</label>
                <input type='radio' id='cannotSee' value='cannotSee' />
                <p>Creacted on: {createdOn}</p>
            </div>
        </div>
    );
};