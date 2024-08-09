import { useState } from "react";

import styles from './AddImage.module.css';

export default function AddImage({
    setImageUrls,
    imageUrls,
}) {
    const [currentUrl, setCurrentUrl] = useState('');

    const handleUrl = (e) => {
        setCurrentUrl(e.target.value);
    };

    const handleAddUrl = () => {
        if (currentUrl.trim()) {
            setImageUrls([...imageUrls, currentUrl]);
            setCurrentUrl('');
        };
    };

    const removeUrlFromList = (indexToRemove) => {
        setImageUrls(state =>
            state.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <>
            <div className={styles.containerFull}>
                <label className={styles.text}>Image URL's:</label>
                <div>
                    <input
                        type="text"
                        value={currentUrl}
                        onChange={handleUrl}
                        placeholder="Enter image URL"
                        className={styles.addUrl}
                    />
                    <button type="button" onClick={handleAddUrl} className={styles.addButton}>Add</button>
                </div>
            </div>

            <div>
                {imageUrls.map((url, index) => (
                    <div key={index}>
                        <img src={url} alt={`Image ${index}`} className={styles.image} />
                        <button type="button" className={styles.removeButton} onClick={() => removeUrlFromList(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};