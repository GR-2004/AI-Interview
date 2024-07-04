'use client'
import Header from '@/app/dashboard/_components/Header';
import { chatSession } from '@/utils/GeminiAiModal';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';

interface data {
  "question":string;
  "answer": string;
}

const Page = () => {
    const params = useParams();
    const { title } = params; // Extract the title from the params
    const newTitle = title.toString().replaceAll("%20", " ");
    
    const [questionsAnswers, setQuestionsAnswers] = useState<data[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      handlePrompt();
    }, []);

    const handlePrompt = async () => {
      const InputPrompt = `Please generate the top 20 interview questions and answers for a ${newTitle}, considering the current technical landscape (e.g., focus on cloud technologies and modern frameworks). Provide the questions and answers in JSON format, with "question" and "answer" as fields in the JSON objects.`;

      const result = await chatSession.sendMessage(InputPrompt);
      const finalRes = result.response.candidates[0].content.parts[0].text;
      const mockJsonResp = finalRes.replace("```json", "").replace("```", "");
      console.log(mockJsonResp)
      const jsonData = JSON.parse(mockJsonResp);
      setQuestionsAnswers(jsonData);
      setLoading(false);
    };

    return (
      <>
        <Header />
        <div className="mx-5 md:mx-20 lg:mx-36">
          <div className="p-5">
            <h2 className="font-bold text-2xl text-center">{newTitle}</h2>
            {loading ? (
              <div className="flex justify-center items-center mt-5">
                <PuffLoader size={60} color={"#123abc"} loading={loading} />
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                {questionsAnswers.map((qa, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
                    <h3 className="font-semibold text-lg mb-2">Question {index + 1}</h3>
                    <p className="text-gray-700 mb-2">{qa.question}</p>
                    <h4 className="font-semibold text-md mb-1">Answer:</h4>
                    <p className="text-gray-600">{qa.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
};

export default Page;
