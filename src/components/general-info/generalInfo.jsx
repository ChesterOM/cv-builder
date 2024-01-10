/* eslint-disable react/prop-types */
import '../styles/GeneralInfo.css'


function GeneralInfo({generalData, setGeneralData}) {

    const handleInputChange = (e) => {
        setGeneralData({ ...generalData, [e.target.name]: e.target.value });
    };

    return (
        <div className="general-info-container info-container">
            <h2>General Information</h2>
            <form>
                <input 
                    type="text"
                    name="name"
                    value={generalData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />

                <input 
                    type="email" 
                    name="email"
                    value={generalData.email}
                    onChange={handleInputChange}
                    placeholder="Email" 
                />
                <input 
                    type="tel" 
                    name="phone"
                    value={generalData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number" 
                />
                <input 
                    type="text" 
                    name="address"
                    value={generalData.address}
                    onChange={handleInputChange}
                    placeholder="Address" 
                />
            </form>
        </div>
    )
}

export default GeneralInfo;