import Button from "./Button"


function Linkedin({linkedinURL, setLinkedinURL, nextStop}){
    const handleChange = (event) => {
        setLinkedinURL(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Paste a link to your LinkedIn Profile</p>
         <input value={linkedinURL} onChange={handleChange} placeholder="www.linkedin.com/in/example" className="questionInput" type="link" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default Linkedin