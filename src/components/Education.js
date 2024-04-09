import { useState } from "react";
import Button from "./Button";

function Education({addEducation, nextStop}){
    const [currentEducation, updateCurrentEducation] = useState(
    {
        schoolName: "",
        degree: "",
        location:"",
        graduationDate:"",
        gpa:""
    });
    const [allEducations, setAllEducations] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        updateCurrentEducation( (prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllEducations( (prevValue) => [...prevValue,currentEducation]);
        addEducation(currentEducation);
        updateCurrentEducation({
        schoolName: "",
        degree: "",
        location:"",
        graduationDate:"",
        gpa:""
        })
    }

    return(
        <div className="container">
        <p className="header">Education</p>
        <form className="enter-form" onSubmit={handleSubmit}>
        <label className="questionText"> 
            School Name
        <input className="workQuestionInput"
          type="text"
          name="schoolName"
          placeholder="Harvard"
          value={currentEducation.schoolName}
          onChange={handleChange}
        />
      </label>
         <br />

      <label className="questionText"> 
      Degree
        <input className="workQuestionInput"
          type="text"
          placeholder="Bachlor"
          name="degree"
          value={currentEducation.degree}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label className="questionText">
        Location (City, State):
        <input className="workQuestionInput"
          type="text"
          name="location"
          placeholder="California, USA"
          value={currentEducation.location}
          onChange={handleChange}
        />
      </label>
        <br />
      <label className="questionText">
        Graduation Date:
        <input className="workQuestionInput"
          type="text"
          name="graduationDate"
          placeholder="June 2022"
          value={currentEducation.graduationDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />

    <label className="questionText"> 
         GPA:
          <input
          className="dateInput"
              name="gpa"
              value={currentEducation.gpa}
            onChange={handleChange}

         />
        </label>
        <br />
        
     
      <button type="Submit">Add</button>
      <Button onClick={nextStop} text="Continue"/>
            </form>
        
        </div>
    )

}
export default Education;