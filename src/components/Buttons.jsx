/* eslint-disable react/prop-types */


export default function Buttons({ onCancel, onSave, onDelete }) {
    return (
        <div className="buttons">
            <div className="main-buttons">
                <button className="cancel" onClick={onCancel} type="button">
                    Cancel
                </button>
                <button className="save" onClick={onSave} type="button">
                    Save
                </button>
            </div>
            <button className="cancel" onClick={onDelete} type="button">
                Delete
            </button>
        </div>
    )
}