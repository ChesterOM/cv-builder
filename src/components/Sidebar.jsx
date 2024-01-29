/* eslint-disable react/prop-types */
import GeneralInfo from "./general-info/generalInfo"
import EducationInfo from "./education/EducationInfo"
import ExperienceInfo from "./experience/ExperienceInfo"
import './styles/Sidebar.css'
import './styles/Inputs.css'

function Sidebar({ generalData, setGeneralData, educationData, setEducationData, experienceData, setExperienceData, initializeNewEducationEntry, initializeNewExperienceEntry }) {
   return (
       <div className="Sidebar">
           <GeneralInfo
               generalData={generalData}
               setGeneralData={setGeneralData}
           />
           <EducationInfo
               educationData={educationData}
               setEducationData={setEducationData}
               initializeNewEducationEntry={initializeNewEducationEntry}
           />
           <ExperienceInfo
               experienceData={experienceData}
               setExperienceData={setExperienceData}
               initializeNewExperienceEntry={initializeNewExperienceEntry}
           />
       </div>
   );
}

export default Sidebar;