/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid';
import '../styles/ExperienceInfo.css';
import Buttons from '../Buttons';
import { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

function ExperienceInfo({ experienceData, setExperienceData, initializeNewExperienceEntry }) {
    const [editingEntry, setEditingEntry] = useState(initializeNewExperienceEntry());
    const [isExpanded, setIsExpanded] = useState(false);
    const [mode, setMode] = useState(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setMode(null);
        }
    }

    const handleEdit = (index) => {
        setMode('edit');
        setEditingEntry({ ...experienceData[index] })
    }

    const handleDelete = (index) => {
        const updatedExperienceData = experienceData.filter((_, i) => i !== index);
        setExperienceData(updatedExperienceData);
    }

    const handleAddNew = () => {
        setMode('add');
        setEditingEntry(initializeNewExperienceEntry());
    }

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
        setMode(null)
        resetForm()
    };

    const handleCancel = () => {
        setMode(null)
        resetForm()
    }

    const resetForm = () => {
        setEditingEntry(initializeNewExperienceEntry());
    };

    return (
        <div className="experience-info-container info-container">
            <div className='header' onClick={toggleExpand}>
               <h2>Experience Information</h2> 
               <KeyboardArrowDown className={`icon ${isExpanded ? 'rotated' : ''}`} />
            </div>
            {isExpanded && mode === null && (
                <div> 
                    {experienceData.map((exp, index) => (
                        <div key={exp.id} className='experience-tab'> 
                           <div onClick={() => handleEdit(index)}>{exp.company} - {exp.jobTitle}</div>
                            <div>
                                <button type='button' className='edit' onClick={() => handleEdit(index)}>Edit</button>
                                <button type='button' className='delete' onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    <button className='add' type='button' onClick={handleAddNew}>Add Experience</button>  
                </div>
            )}
            {isExpanded && (mode === 'add' || mode === 'edit') && (
                <form>
                    <input 
                        type="text"
                        name="company"
                        value={editingEntry.company}
                        onChange={handleInputChange}
                        placeholder="Enter company"
                    />

                    <input 
                        type="text" 
                        name="jobTitle"
                        value={editingEntry.jobTitle}
                        onChange={handleInputChange}
                        placeholder="Job title" 
                    />
                    <input 
                        type="text" 
                        name="startDate"
                        value={editingEntry.startDate}
                        onChange={handleInputChange}
                        placeholder="Start date of position" 
                    />
                    <input 
                        type="text" 
                        name="endDate"
                        value={editingEntry.endDate}
                        onChange={handleInputChange}
                        placeholder="End date of Position" 
                    />
                    <input 
                        type="text" 
                        name="location"
                        value={editingEntry.location}
                        onChange={handleInputChange}
                        placeholder="Location" 
                    />
                    <input 
                        type="text" 
                        name="description"
                        value={editingEntry.description}
                        onChange={handleInputChange}
                        placeholder="Job Description" 
                    />
                    <Buttons 
                    onSave={handleSave}
                    onCancel={handleCancel}
                    />
                </form>
            )}  
        </div>
    )
}

export default ExperienceInfo;