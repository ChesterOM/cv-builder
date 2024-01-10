
import { useState } from 'react'
import './App.css'
import Preview from './components/Preview'
import Sidebar from './components/Sidebar'

function App() {
    const [generalData, setGeneralData] = useState({
        name: 'test',
        email: '',
        phone: '',
        address:''
    })
    const [educationData, setEducationData] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: ''
    })
    const [experienceData, setExperienceData] = useState({
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
    })
    
    
    return(
        <>
            <Sidebar 
                generalData={generalData}
                setGeneralData={setGeneralData}
                educationData={educationData}
                setEducationData={setEducationData}
                experienceData={experienceData}
                setExperienceData={setExperienceData}
            />
            <Preview 
                generalData={generalData}
                educationData={educationData}
                experienceData={experienceData}
            />
        </>
    )
}

export default App
