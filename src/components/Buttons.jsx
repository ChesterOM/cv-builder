/* eslint-disable react/prop-types */

import './styles/Buttons.css';
export default function Buttons({ onCancel, onSave }) {
    return (
        <div className="buttons">
            <div className="button-container">
                <button className="cancel" onClick={onCancel} type="button">Cancel</button>
                <button className="save" onClick={onSave} type="button">Save</button>
            </div>
            
        </div>
    )
}