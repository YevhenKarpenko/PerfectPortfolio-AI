import Button from "./Button";


function Name({name, setName, nextStop}){
    const handleChange = (event) => {
        setName(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">What is your full name?</p>
         <input value={name} onChange={handleChange} placeholder="Steve Jobs" className="questionInput" type="text" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default Name;