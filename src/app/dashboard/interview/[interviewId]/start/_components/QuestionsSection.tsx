import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionsSection = ({ interviewQuestion, activeQuestionIndex }: any) => {
  function textToSpeech(question: string) {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(question);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your Browser does not support text to speech");
    }
  }

  return (
    interviewQuestion && (
      <div className="p-5 my-10 mx-36 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {interviewQuestion &&
            interviewQuestion.map((question: string, index: number) => (
              <h2
                key={index}
                className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${
                  activeQuestionIndex == index &&
                  "text-purple-600 font-extrabold"
                }`}
              >
                Question {index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-10 text-md md:text-lg">
          {interviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(interviewQuestion[activeQuestionIndex]?.question)
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-purple-600">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-purple-600 my-2">
            Enable Video Web Cam and Microphone to start your AI Generated Mock
            Interview, It has 5 Question which you can answer and at the last
            you will get the report on the basis of your answer.NOTE: We never
            record your video, Web Cam access you cn disable at any time if you
            want.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
