/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid';
import '../styles/EducationInfo.css';
import Buttons from '../Buttons';
import { useState } from 'react';


function EducationInfo({educationData, setEducationData, initializeNewEducationEntry}) {
    const [editingEntry, setEditingEntry] = useState(initializeNewEducationEntry);

    const handleInputChange = (e) => {
        setEditingEntry({ ...editingEntry, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (editingEntry.id) {
            const updatedEducationData = educationData.map((entry) =>
                entry.id === editingEntry.id ? editingEntry : entry
            );
            setEducationData(updatedEducationData);   
        } else {
            setEducationData([...educationData, { ...editingEntry, id: uuidv4() }]);
        }
    };

    const resetForm = () => {
        setEditingEntry({ ...educationData[0] });
    };

    const deleteEducation = (entryId) => {
        const updatedEducationData = educationData.filter((entry) => entry.id !== entryId);
        setEducationData(updatedEducationData);
    };

    return (
        <div className="education-info-container info-container">
            <h2>Education Information</h2>
            <form>
                <input 
                    type="text"
                    name="school"
                    value={educationData.school}
                    onChange={handleInputChange}
                    placeholder="Enter school / university"
                />

                <input 
                    type="text" 
                    name="degree"
                    value={educationData.degree}
                    onChange={handleInputChange}
                    placeholder="Degree / Field of study" 
                />
                <input 
                    type="text" 
                    name="startDate"
                    value={educationData.startDate}
                    onChange={handleInputChange}
                    placeholder="Start date of study" 
                />
                <input 
                    type="text" 
                    name="endDate"
                    value={educationData.endDate}
                    onChange={handleInputChange}
                    placeholder="End date of study" 
                />
                <input 
                    type="text" 
                    name="location"
                    value={educationData.location}
                    onChange={handleInputChange}
                    placeholder="Location" 
                />
            </form>
            <Buttons 
                onSave={handleSave}
                onCancel={resetForm}
                onDelete={() => deleteEducation(editingEntry.id)}
            />
        </div>
    )
}

export default EducationInfo;