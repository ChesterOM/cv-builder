/* eslint-disable react/prop-types */
import './styles/Preview.css';

function Preview({ generalData, educationData, experienceData }) {
   return (
     <div className='preview-container'>
         <div className='preview-top'>
             <h1 className='preview-name'>{generalData.name}</h1>
             <h2 className='preview-email'>{generalData.email}</h2>
             <h2 className='preview-phone'>{generalData.phone}</h2>
             <h2 className='preview-address'>{generalData.address}</h2>
         </div>
         <div className='preview-bottom'>
             <div className='preview-education-container section'>
                 <h3>Education</h3>
                 <div className='section-content'>
                     {educationData.map((edu, index)=> (
                        <div className='preview-data' key={index}>
                        <strong>{edu.school}</strong>
                        <span>{edu.degree}</span>
                        <span>{edu.startDate} - {edu.endDate}</span>
                        <span>{edu.location}</span>
                      </div>
                     ))}
                 </div>
             </div>
             <div className='preview-experience-container section'>
                <h3>Experience</h3>
                <div className='section-content'>
                    {experienceData.map((exp, index) => (
                    <div className='preview-exp-data' key={index}>
                        <div className="row"> 
                        <div><strong>{exp.company}</strong> - {exp.jobTitle}</div>
                        <div>{exp.startDate} - {exp.endDate}</div>
                        <div>{exp.location}</div>
                        </div>
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