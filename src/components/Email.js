import Button from "./Button";


function Email({email, setEmail, nextStop}){
    const handleChange = (event) => {
        setEmail(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Enter your email</p>
         <input value={email} onChange={handleChange} placeholder="example@gmail.com" className="questionInput wider" type="email" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default Email;