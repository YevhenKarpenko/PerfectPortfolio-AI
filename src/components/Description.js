import Button from "./Button"


function Description({description, setDescription, nextStop}){
    const handleChange = (event) => {
        setDescription(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Describe your professional persona, including your skills, experience, and what sets you apart.</p>
         <textarea value={description} onChange={handleChange} placeholder=" Write freely; ChatGPT will refine your input into a polished summary" type="text" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default Description