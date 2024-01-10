/* eslint-disable react/prop-types */

import '../styles/EducationInfo.css';

function EducationInfo({educationData, setEducationData}) {

    const handleInputChange = (e) => {
        setEducationData({ ...educationData, [e.target.name]: e.target.value });
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
                    name="start-date"
                    value={educationData.startDate}
                    onChange={handleInputChange}
                    placeholder="Start date of study" 
                />
                <input 
                    type="text" 
                    name="end-date"
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
        </div>
    )
}

export default EducationInfo;