/* eslint-disable react/prop-types */
import './styles/Preview.css'


function Preview({generalData, educationData, experienceData}){
   return(
   <div className='preview-container'>
        <div className='preview-top'>
            <h1 className='preview-name'>{generalData.name}</h1>
            <h2 className='preview-email'>{generalData.email}</h2>
            <h2 className='preview-phone'>{generalData.phone}</h2>
            <h2 className='preview-address'>{generalData.address}</h2>
        </div>
        <div className='preview-bottom'>
            <div className='preview-education-container'>
                <h2>Education</h2> 
            </div>
            <div className='preview-experience-container'>
                <h2>Experience</h2> 
            </div>
        </div>
        
        

    </div>
    );
}

export default Preview