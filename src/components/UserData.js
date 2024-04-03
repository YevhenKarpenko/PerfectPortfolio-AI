
import { useEffect, useState } from "react";

import Name from "./Name";
import Position from "./Position";




function UserData(){

    const [currentStop, setCurrentStop] = useState(0);

    const [animationClass, setAnimationClass] = useState("fade-enter")

    const [userInfo, setUserInfo] = useState({
        name: "",
        position: "",
    });

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

    const stops = [
        { Component: Name, props: { name: userInfo.name, setName: (value) => updateField('name', value), nextStop } },
        { Component: Position, props: { position: userInfo.position, setPosition: (value) => updateField('position', value), nextStop } },
        // Add more steps as you expand your form
    ];

    const CurrentStopComponent = stops[currentStop].Component;
    const currentProps = stops[currentStop].props;

return(
    <div className={`step-container ${animationClass}`}> 
      <CurrentStopComponent {...currentProps} />
        
    </div>
)
}

export default UserData;