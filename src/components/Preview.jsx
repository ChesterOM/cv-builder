/* eslint-disable react/prop-types */
import './styles/Preview.css';

function Preview({ generalData, educationData, experienceData }) {
   return (
     <div className='preview-container'>
         <div className='preview-top'>
             <h1 className='preview-name'>{generalData.name}</h1>
             {/* Icons can be added here with <img> tags or using a font icon library */}
             <h2 className='preview-email'>{generalData.email}</h2>
             <h2 className='preview-phone'>{generalData.phone}</h2>
             <h2 className='preview-address'>{generalData.address}</h2>
         </div>
         <div className='preview-bottom'>
             <div className='preview-education-container section'>
                 <h3>Education</h3>
                 <div className='section-content'>
                     {educationData.map((edu, index)=> (
                        <div key={index}>
                            <div><strong>{edu.school}</strong> - {edu.degree}</div>
                            <div>{edu.startDate} - {edu.endDate}</div>
                            <div>{edu.location}</div>
                        </div>
                     ))}
                 </div>
             </div>
             <div className='preview-experience-container section'>
                 <h3>Experience</h3>
                 <div className='section-content'>
                     {experienceData.map((exp, index) => (
                         <div key={index}>
                             <div><strong>{exp.company}</strong> - {exp.jobTitle}</div>
                             <div>{exp.startDate} - {exp.endDate}</div>
                             <div>{exp.location}</div>
                             <p>{exp.description}</p>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
     </div>
   );
}

export default Preview;