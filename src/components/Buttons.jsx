

export default function Buttons({ cancel, save, remove }) {
    return (
        <div className="buttons">
            <div className="main-buttons">
                <button className="cancel" onClick={cancel} type="button">
                    Cancel
                </button>
                <button className="save" onClick={save} type="submit">
                    Save
                </button>
            </div>
            <button className="cancel" onClick={remove} type="button">
                Delete
            </button>
        </div>
    )
}