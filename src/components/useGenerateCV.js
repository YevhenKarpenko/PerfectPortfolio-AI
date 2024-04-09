import { useState } from 'react';
import axios from 'axios';

const useGenerateCV = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cvText, setCvText] = useState('');


    const url = 'https://api.openai.com/v1/chat/completions';

  

    const generateCVContent = async (userInfo, experienceArray, educationArray) => {
        setLoading(true);
        setError(null);


      

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          };
    
         

       

        // Constructing the prompt
        let prompt = `Create a professional CV for the following details:\nName: ${userInfo.name}\nPosition: ${userInfo.position}\nPhone: ${userInfo.phoneNumber}\nEmail: ${userInfo.email}\nLinkedIn: ${userInfo.linkedinURL}\nPortfolio: ${userInfo.portfolioURL}\nLocation: ${userInfo.location}\nDescription: ${userInfo.description}\n\nExperience:\n`;

        experienceArray.forEach(exp => {
            prompt += `${exp.jobTitle} at ${exp.companyName}, location:${exp.location}, from ${exp.startDate} to ${exp.endDate} Responsibilities: ${exp.responsibilities}\n`;
        });

        prompt += `\nEducation:\n`;
        educationArray.forEach(edu => {
            prompt += `${edu.degree} at ${edu.schoolName}, Location: ${edu.location}, GPA:${edu.gpa} Graduation date:${edu.graduationDate}\n`;
        });

        const data = {
            model: "gpt-3.5-turbo-0125",
             messages: [
                {
                  role: "system",
                  content: "You are a helpful assistant that created a perfectly CV baced on the input data"
                },
                {
                  role: "user",
                  content: prompt
                }
              ]
          };
       

        try {
            const response = await axios.post(url, data, { headers });
            setCvText(response.data.choices[0].message.content);

        } catch (error) {
            console.error('Error generating CV:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { generateCVContent, loading, error, cvText };
};

export default useGenerateCV;
