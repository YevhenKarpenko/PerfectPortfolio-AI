import Button from "./Button";


function Position({position, setPosition, nextStop}){
    const handleChange = (event) => {
        setPosition(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Enter your Job Title</p>
         <input value={position} onChange={handleChange} placeholder="AI Developer" className="questionInput" type="text" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default Position