import { useState } from 'react';
import axios from 'axios';

const useGenerateCV = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cvText, setCvText] = useState('');

    const generateCVContent = async (userInfo, experienceArray, educationArray) => {
        setLoading(true);
        setError(null);

        // Constructing the prompt
        let prompt = `Create a professional CV for the following details:\nName: ${userInfo.name}\nPosition: ${userInfo.position}\nPhone: ${userInfo.phoneNumber}\nEmail: ${userInfo.email}\nLinkedIn: ${userInfo.linkedinURL}\nPortfolio: ${userInfo.portfolioURL}\nLocation: ${userInfo.location}\nDescription: ${userInfo.description}\n\nExperience:\n`;

        experienceArray.forEach(exp => {
            prompt += `${exp.jobTitle} at ${exp.companyName}, location:${exp.location}, from ${exp.startDate} to ${exp.endDate} Responsibilities: ${exp.responsibilities}\n`;
        });

        prompt += `\nEducation:\n`;
        educationArray.forEach(edu => {
            prompt += `${edu.degree} at ${edu.schoolName}, Location: ${edu.location}, GPA:${edu.gpa} Graduation date:${edu.graduationDate}\n`;
        });

        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-4", // Update model as necessary
                prompt: prompt,
                temperature: 0.5,
                max_tokens: 1024,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            }, {
                headers: {
                    'Authorization': `Bearer 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`,
                    'Content-Type': 'application/json'
                }
            });

            setCvText(response.data.choices[0].text);
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
