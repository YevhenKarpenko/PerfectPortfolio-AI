import { useState } from "react";
import Button from "./Button"


function WorkExp({addExperience, nextStop}){

    const [currentExperience, updateCurrentExperience] = useState(
        {
            jobTitle: "",
            companyName: "",
            location: "",
            startDate: "",
            endDate:"",
            responsibilities: "",
        }
    )


    const handleChange = (e) => {
        const {name, value} = e.target;
        updateCurrentExperience( (prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addExperience(currentExperience);
        updateCurrentExperience({
            jobTitle: "",
            companyName: "",
            location: "",
            startDate: "",
            endDate:"",
            responsibilities: "",
        })
    }

    return(
        <>
        <p className="header">Add your Work Experience</p>
        <form className="enter-form" onSubmit={handleSubmit}>
        <label className="questionText"> 
            Job Title:
        <input className="workQuestionInput"
          type="text"
          name="jobTitle"
          placeholder="Softwere developer Intern"
          value={currentExperience.jobTitle}
          onChange={handleChange}
        />
      </label>
         <br />

      <label className="questionText"> 
        Company Name:
        <input className="workQuestionInput"
          type="text"
          placeholder="Google"
          name="companyName"
          value={currentExperience.companyName}
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
          value={currentExperience.location}
          onChange={handleChange}
        />
      </label>
        <br />
      <label className="questionText">
        Dates of Employment (Month, Year):
        <input className="dateInput"
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={currentExperience.startDate}
          onChange={handleChange}
        />
        <input className="dateInput"
          type="text"
          name="endDate"
          placeholder="End Date"
          value={currentExperience.endDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />

    <label className="questionText"> 
          Responsibilities and Achievements:
          <textarea
         name="responsibilities"
              value={currentExperience.responsibilities}
            onChange={handleChange}
            placeholder="Please describe your work responsibilities and achievements. Write freely; our AI will refine your input into a polished summary"
         />
        </label>
        <br />
      <button type="Submit">Add</button>
      <Button onClick={nextStop} text="Continue"/>
            </form>
        
        </>
    )
}

export default WorkExp;
