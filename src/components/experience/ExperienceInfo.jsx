/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid';
import '../styles/ExperienceInfo.css';
import Buttons from '../Buttons';
import { useState } from 'react';

function ExperienceInfo({ experienceData, setExperienceData, initializeNewExperienceEntry }) {
    const [editingEntry, setEditingEntry] = useState(initializeNewExperienceEntry());

    const handleInputChange = (e) => {
        setEditingEntry({ ...editingEntry, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (editingEntry.id) {
            const updatedExperienceData = experienceData.map(entry => 
                entry.id === editingEntry.id ? editingEntry : entry
            );
            setExperienceData(updatedExperienceData);
        } else {
            setExperienceData([...experienceData, { ...editingEntry, id: uuidv4() }]);
        }
    };

    const resetForm = () => {
        setEditingEntry(initializeNewExperienceEntry());
    };

    const deleteExperience = (entryId) => {
        const updatedExperienceData = experienceData.filter(entry => entry.id !== entryId);
        setExperienceData(updatedExperienceData);
    };

    return (
        <div className="experience-info-container info-container">
            <h2>Experience Information</h2>
            <form>
                <input 
                    type="text"
                    name="company"
                    value={experienceData.company}
                    onChange={handleInputChange}
                    placeholder="Enter company"
                />

                <input 
                    type="text" 
                    name="job title"
                    value={experienceData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Job title" 
                />
                <input 
                    type="text" 
                    name="startDate"
                    value={experienceData.startDate}
                    onChange={handleInputChange}
                    placeholder="Start date of position" 
                />
                <input 
                    type="text" 
                    name="endDate"
                    value={experienceData.endDate}
                    onChange={handleInputChange}
                    placeholder="End date of Position" 
                />
                <input 
                    type="text" 
                    name="location"
                    value={experienceData.location}
                    onChange={handleInputChange}
                    placeholder="Location" 
                />
                <input 
                    type="text" 
                    name="description"
                    value={experienceData.description}
                    onChange={handleInputChange}
                    placeholder="Job Description" 
                />
                <Buttons 
                onSave={handleSave}
                onCancel={resetForm}
                onDelete={() => deleteExperience(editingEntry.id)}
                />
            </form>
        </div>
    )
}

export default ExperienceInfo;