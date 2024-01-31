/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid';
import '../styles/EducationInfo.css';
import Buttons from '../Buttons';
import { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

function EducationInfo({educationData, setEducationData, initializeNewEducationEntry}) {
    const [editingEntry, setEditingEntry] = useState(initializeNewEducationEntry);
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
        setEditingEntry({ ...educationData[index] })
    }

    const handleDelete = (index) => {
        const updatedEducationData = educationData.filter((_, i) => i !== index);
        setEducationData(updatedEducationData);
    }

    const handleAddNew = () => {
        setMode('add');
        setEditingEntry(initializeNewEducationEntry());
    }

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
        setMode(null)
        resetForm()
    };

    const handleCancel = () => {
        setMode(null)
        resetForm()
    }

    const resetForm = () => {
        setEditingEntry({ ...educationData[0] });
    };


    return (
        <div className="education-info-container info-container">
            <div className='header' onClick={toggleExpand}>
               <h2>Education Information</h2> 
               <KeyboardArrowDown className={`icon ${isExpanded ? 'rotated' : ''}`} />
            </div>
            {isExpanded && mode === null && (
                <div> 
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className='education-tab'>
                            <div onClick={() => handleEdit(index)}>{edu.school} - {edu.degree}</div>  
                            <div>
                                <button type='button' className='edit' onClick={() => handleEdit(index)}>Edit</button>
                                <button type='button' className='delete' onClick={() => handleDelete(index)}>Delete</button>                        
                            </div>
                        </div>
                    ))}
                    <button className='add' type='button' onClick={handleAddNew}>Add Education</button>
                </div>
            )}

            {isExpanded && (mode === 'add' || mode === 'edit') && (
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
                    <Buttons 
                    onSave={handleSave}
                    onCancel={handleCancel}
                    />
                </form>     
            )}
        </div>
    )
}

export default EducationInfo;