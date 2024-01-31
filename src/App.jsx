

import { useState, useEffect } from 'react'
import './App.css'
import Preview from './components/Preview'
import Sidebar from './components/Sidebar'

function App() {
    const [generalData, setGeneralData] = useState(() => {
        const saved = localStorage.getItem('generalData');
        return saved ? JSON.parse(saved) : { name: '', email: '', phone: '', address: '' };
    });

    const [educationData, setEducationData] = useState(() => {
        const saved = localStorage.getItem('educationData');
        return saved ? JSON.parse(saved) : []; 
    });

    const [experienceData, setExperienceData] = useState(() => {
        const saved = localStorage.getItem('experienceData');
        return saved ? JSON.parse(saved) : []; 
    });
    
    useEffect(() => {
        localStorage.setItem('educationData', JSON.stringify(educationData));
        localStorage.setItem('experienceData', JSON.stringify(experienceData));
        localStorage.setItem('generalData', JSON.stringify(generalData));
    }, [educationData, experienceData, generalData]); 

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
