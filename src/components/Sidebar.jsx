/* eslint-disable react/prop-types */
import GeneralInfo from "./general-info/generalInfo"
import EducationInfo from "./education/EducationInfo"
import ExperienceInfo from "./experience/ExperienceInfo"
import './styles/Sidebar.css'
import './styles/Inputs.css'

export default function Sidebar({ generalData, setGeneralData, educationData, setEducationData, experienceData, setExperienceData }){
   return (
      <div className="Sidebar">
         <GeneralInfo generalData={generalData} setGeneralData={setGeneralData} />
         <EducationInfo educationData={educationData} setEducationData={setEducationData} />
         <ExperienceInfo experienceData={experienceData} setExperienceData={setExperienceData} />
      </div>
   )
}