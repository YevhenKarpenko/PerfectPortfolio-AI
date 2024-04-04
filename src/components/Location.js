import Button from "./Button"


function Location({location, setLocation, nextStop}){
    const handleChange = (event) => {
        setLocation(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Enter your Location (City, State, Country)</p>
         <input value={location} onChange={handleChange} placeholder="California, USA" className="questionInput" type="location" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default Location