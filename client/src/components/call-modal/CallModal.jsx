import { useState } from 'react';

import * as callService from '../../services/callService';
import styles from './CallModal.module.css';

const initialValues = {
    description: '',
    callStatus: ''
};

export default function CallModal({
    contacts,
    username,
    createdOn,
    _id,
    closeModal,
    handleBackgroundClick,
}) {
    const [formValues, setFormValues] = useState(initialValues);

    const onSubmit = async (e) => {
        e.preventDefault();
        await callService.create(_id, formValues);
        closeModal();
    };

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

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
        <form onSubmit={onSubmit}>
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
                            name='description'
                            className={styles.descriptionTextarea}
                            value={formValues.description}
                            onChange={onChange}
                        />
                    </div>

                    <div className={styles.section}>
                        <p className={styles.sectionTitle}>Call status</p>
                        <div className={styles.radioGroup}>
                            <label htmlFor="didntAnswer">
                                <input
                                    type="radio"
                                    id="didntAnswer"
                                    name="callStatus"
                                    value="didntAnswer"
                                    onChange={onChange}
                                />
                                Didn't answer
                            </label>

                            <label htmlFor="wrongNumber">
                                <input
                                    type="radio"
                                    id="wrongNumber"
                                    name="callStatus"
                                    value="wrongNumber"
                                    onChange={onChange}
                                />
                                Wrong Number
                            </label>

                            <label htmlFor="pickUp">
                                <input
                                    type="radio"
                                    id="pickUp"
                                    name="callStatus"
                                    value="pickUp"
                                    onChange={onChange}
                                />
                                Picked up
                            </label>

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