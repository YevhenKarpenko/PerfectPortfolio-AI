
import { useEffect, useState } from "react";



import Name from "./Name";
import Position from "./Position";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import Linkedin from "./Linkedin";
import PortfolioURL from "./PortfolioURL";
import Location from "./Location";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Description from "./Description";

import useGenerateCV from "./useGenerateCV";



function UserData(){

    const [currentStop, setCurrentStop] = useState(0);

    const [animationClass, setAnimationClass] = useState("fade-enter")

    const [userInfo, setUserInfo] = useState({
        name: "",
        position: "",
        phoneNumber: "",
        email: "",
        linkedinURL: "",
        portfolioURL: "",
        location: "",
        description: ""
    });

    const [experienceArray, setExperienceArray] = useState([]); 
    const [educationArray, setEducationArray] = useState([]);


    const { generateCVContent, loading, error, cvText } = useGenerateCV();
     // Add the generateCV function
     const generateCV = () => {
        generateCVContent(userInfo, experienceArray, educationArray);
    };

    useEffect( () => {
         // Apply the enter animation every time currentStep changes
        setAnimationClass("fade-enter");
        const timer = setTimeout( () => {
            setAnimationClass("fade-enter-active");
        },0); // Timeout set to 0 to ensure the class changes after the component is rendered
         // Cleanup the timeout when the component unmounts or before the next re-render
         return () => clearTimeout(timer);


    },[currentStop]);

    const updateField = (field, value) => {    
        setUserInfo(prev => ({ ...prev, [field]: value }));
        
    };

    const nextStop = () => {
        setAnimationClass("fade-exit-active");
        setTimeout( () => {
            if (currentStop < stops.length - 1) {
                setCurrentStop(currentStop + 1);
            }
        },250);    
    }

    const addExperience = (experience) => {
        setExperienceArray( (prevData) => [...prevData, experience]);
        console.log(experienceArray);
    }
    const addEducation = (education) => {
        setEducationArray( (prevData) => [...prevData, education]);
        console.log(educationArray);
    }

    const stops = [
        { Component: Name, props: { name: userInfo.name, setName: (value) => updateField('name', value), nextStop } },
        { Component: Position, props: { position: userInfo.position, setPosition: (value) => updateField('position', value), nextStop } },
        { Component: PhoneNumber, props: {phoneNumber: userInfo.phoneNumber, setPhoneNumber: (value) => updateField("phoneNumber", value), nextStop}},
        { Component: Email, props: {email: userInfo.email, setEmail: (value) => updateField("email", value), nextStop}},
        { Component: Linkedin, props: {linkedinURL: userInfo.linkedinURL, setLinkedinURL: (value) => updateField("linkedinURL", value), nextStop}},
        { Component: PortfolioURL, props: {portfolioURL: userInfo.portfolioURL, setPortfolioURL: (value) => updateField("portfolioURL", value), nextStop}},
        { Component: Location, props: {location: userInfo.location, setLocation: (value) => updateField("location", value), nextStop}},
        { Component: Description, props: {description: userInfo.description, setDescription: (value) => updateField("description", value), nextStop}},
        { Component: WorkExp, props: {addExperience: addExperience, nextStop}},
        { Component: Education, props: {addEducation: addEducation, nextStop}},
        {
            Component: () => (
                <div>
                    <button onClick={generateCV} disabled={loading}>
                        Generate CV
                    </button>
                    {loading && <p>Generating CV...</p>}
                    {error && <p>Error generating CV: {error.message}</p>}
                    {cvText && <div><h3>Generated CV:</h3><p>{cvText}</p></div>}
                </div>
            ),
            props: {}
        },
       

        //
        // Add more steps as you expand your form
    ];

    const CurrentStopComponent = stops[currentStop].Component;
    const currentProps = stops[currentStop].props;

return(
    <div className="main-content">
    <div className={`step-container ${animationClass}`}>
        <CurrentStopComponent {...currentProps} />
    </div>
    {currentStop === stops.length - 1 ? null : (
        <button onClick={nextStop}>Next</button>
    )}
</div>
)
}

export default UserData;