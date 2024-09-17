import styles from './CallModal.module.css';

export default function CallModal({
    contacts,
    username,
    createdOn,
    closeModal,
    handleBackgroundClick
}) {
    const date = new Date(createdOn);

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <form>
            <div className={styles.modalContainer} onClick={handleBackgroundClick}>
                <div className={styles.modalContent}>

                    <div className={styles.section}>
                        <p className={`${styles.sectionTitle} ${styles.heading}`}>Contacts
                            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                        </p>
                        <p className={styles.userInfo}>{username} - {contacts}</p>
                    </div>

                    <div className={styles.section}>
                        <label htmlFor="description" className={styles.descriptionLabel}>Description</label>
                        <textarea
                            rows="4"
                            className={styles.descriptionTextarea}
                        />
                    </div>

                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>Call status</p>
                        <div className={styles.radioGroup}>
                            <label htmlFor="didntAnswer">
                                <input type="radio" id="didntAnswer" name="callStatus" value="didntAnswer" />Didn't answer</label>
                            <label htmlFor="wrongNumber">
                                <input type="radio" id="wrongNumber" name="callStatus" value="wrongNumber" /> Wrong Number</label>
                            <label htmlFor="pickUp">
                                <input type="radio" id="pickUp" name="callStatus" value="pickUp" />Picked up</label>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>View status</p>
                        <div className={styles.radioGroup}>
                            <label htmlFor="canSee">
                                <input type="radio" id="canSee" name="viewStatus" value="canSee" /> Can see it</label>
                            <label htmlFor="cannotSee">
                                <input type="radio" id="cannotSee" name="viewStatus" value="cannotSee" />Can't see it</label>
                        </div>
                    </div>

                    <div className={styles.submitButtonRow}>
                        <button className={styles.submitButton}>Save</button>
                    </div>
                    <p className={styles.createdOn}>{formattedDate} at {formattedTime}</p>
                </div>
            </div>
        </form>
    );
};