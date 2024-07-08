"use client";

import Header from "@/app/dashboard/_components/Header";
import { chatSession } from "@/utils/GeminiAiModal";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { PuffLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Data {
  question: string;
  answer: string;
}

const Page = () => {
  const params = useParams();
  const { title }: any = params; // Extract the title from the params
  const newTitle = decodeURIComponent(title);

  const [questionsAnswers, setQuestionsAnswers] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const hasErrorOccurred = useRef(false); // To ensure the toast is shown only once

  useEffect(() => {
    handlePrompt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency array to ensure the effect runs only once on mount

  const handlePrompt = async () => {
    try {
      const InputPrompt = `Please generate the top 10 interview questions and answers for a ${newTitle}, considering the current technical landscape (e.g., focus on cloud technologies and modern frameworks). Provide the questions and answers in JSON format, with "question" and "answer" as fields in the JSON objects.`;

      const result = await chatSession.sendMessage(InputPrompt);
      if (
        !result ||
        !result.response ||
        !result.response.candidates ||
        result.response.candidates.length === 0
      ) {
        throw new Error("Invalid response format");
      }

      const finalRes = result.response.candidates[0].content.parts[0].text;
      const mockJsonResp = finalRes.replace("```json", "").replace("```", "");

      try {
        const jsonData = JSON.parse(mockJsonResp);
        setQuestionsAnswers(jsonData);
      } catch (jsonError) {
        throw new Error("Failed to parse JSON response");
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      if (!hasErrorOccurred.current) {
        hasErrorOccurred.current = true; // Set the flag to true after the first error
        toast.error(
          `Error: ${
            error.message ||
            "Something went wrong, please try again or after some time"
          }`
        );
      }
    }
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
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    Question {index + 1}
                  </h3>
                  <p className="text-gray-700 mb-2">{qa.question}</p>
                  <h4 className="font-semibold text-md mb-1">Answer:</h4>
                  <p className="text-gray-600">{qa.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;
