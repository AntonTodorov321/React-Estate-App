export default function AddComment() {
    return (
        <div>
            <h3>Add a Comment</h3>
            <form >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                    />
                </div>
                <button type="submit">Submit Comment</button>
            </form>
        </div>
    );
}