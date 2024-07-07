import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { chatSession } from "@/utils/GeminiAiModal";
import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnswerSection = ({
  interviewQuestion,
  activeQuestionIndex,
  interviewData,
}: any) => {
  const { user } = useUser();
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      typeof result === "string"
        ? setUserAnswer((prevAns) => prevAns + result)
        : setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);
    const feedbackPrompt =
      "Question: " +
      interviewQuestion[activeQuestionIndex]?.question +
      ", User Answer " +
      userAnswer +
      ", Depends on question and user answer for given interview question, Please give us rating for answer and feedback as area of improvment if any " +
      "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(mockJsonResp);
    const JsonFeedbackResp = JSON.parse(mockJsonResp);
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: interviewQuestion[activeQuestionIndex]?.question,
      correctAns: interviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });

    if (resp) {
      toast({
        title: "✅ User Answer recorded successfully",
      });
      setUserAnswer("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col p-5">
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-5 mt-20 bg-black w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
        <Image
          src={"/webcam.png"}
          alt="webcam-image"
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam style={{ height: 300, width: "100%", zIndex: 10 }} mirrored />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <Mic /> Stop Recording
          </h2>
        ) : (
          "Record Answer"
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;
