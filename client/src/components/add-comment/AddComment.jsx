import { useState } from 'react';

import styles from './AddComment.module.css';
import * as commentService from '../../services/commentService';

export default function AddComment({
    estateId
}) {
    const [formValues, setFormValues] = useState({
        username: '',
        content: ''
    });

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const addCommentHandler = async (e) => {
        e.preventDefault();

        await commentService.create(
            estateId,
            formValues.content,
            formValues.username
        );
    };

    return (
        <div className={styles.formContainer}>
            <h3>Add a comment</h3>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="username" className={styles.label}>Username:</label>
                    <input
                        name='username'
                        type="text"
                        id="username"
                        className={styles.input}
                        value={formValues.username}
                        onChange={changeHandler}
                        placeholder='username'
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="content" className={styles.label}>Content:</label>
                    <textarea
                        name='content'
                        id="content"
                        className={styles.textarea}
                        value={formValues.comment}
                        onChange={changeHandler}
                        placeholder='Comment...'
                    />
                </div>
                <button type="submit" onClick={addCommentHandler} className={styles.button}>Submit Comment</button>
            </form>
        </div>
    );
};