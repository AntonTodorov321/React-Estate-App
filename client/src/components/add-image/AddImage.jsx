import { useState } from "react";

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
            <label>Image URL's:</label>
            <div>
                <input
                    type="text"
                    value={currentUrl}
                    onChange={handleUrl}
                    placeholder="Enter image URL"
                    style={{ marginRight: '10px', width: '300px' }}
                />
                <button type="button" onClick={handleAddUrl}>Add</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                {imageUrls.map((url, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <img src={url} alt={`Image ${index}`} style={{ width: '300px', height: 'auto' }} />
                        <button type="button" onClick={() => removeUrlFromList(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};