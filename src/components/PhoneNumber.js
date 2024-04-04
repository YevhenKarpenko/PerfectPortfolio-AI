import Button from "./Button";


function PhoneNumber({phoneNumber, setPhoneNumber, nextStop}){

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Enter your phone number</p>
         <input value={phoneNumber} onChange={handleChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" className="questionInput" type="tel" />

          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
          
        </div>
    )
}

export default PhoneNumber;