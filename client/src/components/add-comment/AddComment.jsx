import { useState } from 'react';

import styles from './AddComment.module.css';
import * as commentService from '../../services/commentService';

const initialValues = {
    username: '',
    content: ''
};

export default function AddComment({
    estateId,
    addComment
}) {
    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentService.create(
            estateId,
            formValues.content,
        );

        addComment(newComment);
        setFormValues(initialValues);
    };

    return (
        <div className={styles.formContainer}>
            <h3>Add a comment</h3>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="content" className={styles.label}>Content:</label>
                    <textarea
                        name='content'
                        id="content"
                        className={styles.textarea}
                        value={formValues.content}
                        onChange={changeHandler}
                        placeholder='Comment...'
                    />
                </div>
                <button type="submit" onClick={addCommentHandler} className={styles.button}>Submit Comment</button>
            </form>
        </div>
    );
};