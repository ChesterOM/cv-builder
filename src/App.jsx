

import { useState } from 'react'
import './App.css'
import Preview from './components/Preview'
import Sidebar from './components/Sidebar'

function App() {
    const [generalData, setGeneralData] = useState(
    {
        name: '',
        email: '',
        phone: '',
        address:''
    });
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    
    const initializeNewEducationEntry = () => {
        return {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: ''
        };
    }

    const initializeNewExperienceEntry = () => {
        return {
            company: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
        };
    };
    
    return (
        <>
            <Sidebar
                generalData={generalData}
                setGeneralData={setGeneralData}
                educationData={educationData}
                setEducationData={setEducationData}
                experienceData={experienceData}
                setExperienceData={setExperienceData}
                initializeNewEducationEntry={initializeNewEducationEntry}
                initializeNewExperienceEntry={initializeNewExperienceEntry}
            />
            <Preview
                generalData={generalData}
                educationData={educationData}
                experienceData={experienceData}
            />
        </>
    );
}

export default App;
