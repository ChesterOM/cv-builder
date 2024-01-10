/* eslint-disable react/prop-types */

import '../styles/ExperienceInfo.css'


function ExperienceInfo({experienceData, setExperienceData}) {

    const handleInputChange = (e) => {
        setExperienceData({ ...experienceData, [e.target.name]: e.target.value });
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
                    name="start-date"
                    value={experienceData.startDate}
                    onChange={handleInputChange}
                    placeholder="Start date of position" 
                />
                <input 
                    type="text" 
                    name="end-date"
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
            </form>
        </div>
    )
}

export default ExperienceInfo;