"use client";
import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import Header from "../../_components/Header";
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultInterface {
  jobPos: string;
  jobDesc: string;
  jobExp: string;
  id: number;
  jsonMockResp: string;
  createdBy: string;
  createdAt: string | null;
  mockId: string;
}

const Interview = ({ params }: any) => {
  const [interviewData, setInterviewData] = useState<
    ResultInterface | undefined
  >(undefined);
  const [webcamEnable, setWebcamEnable] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  /*
   Used to get interview details by mockid
  */
  const GetInterviewDetails = async () => {
    const result: ResultInterface[] = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
  };

  return (
    <>
      <Header />
      <div className="my-10 flex justify-center flex-col items-center">
        <h2 className="font-bold text-2xl">Let's Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 py-14 lg:gap-48">
          <div className="flex flex-col my-5 gap-5 justify-center items-center max-w-96">
            <div className="flex flex-col p-5 rounded-lg border gap-5">
              <h2 className="text-lg">
                <strong>Job Role/Position :  </strong>
                {interviewData?.jobPos}
              </h2>
              <h2 className="text-lg">
                <strong>Job Description/TechStack :  </strong>
                {interviewData?.jobDesc}
              </h2>
              <h2 className="text-lg">
                <strong>Years of Experience :  </strong>
                {interviewData?.jobExp}
              </h2>
            </div>
            <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
              <h2 className="flex gap-2 items-center text-yellow-500">
                <Lightbulb />
                <strong>Information</strong>
              </h2>
              <h2 className="mt-3 text-yellow-500">Enable Video Web Cam and Microphone to start your AI Generated Mock Interview, It has 5 Question which you can answer and at the last you will get the report on the basis of your answer.NOTE: We never record your video, Web Cam access you cn disable at any time if you want.</h2>
            </div>
          </div>
          <div className="">
            {webcamEnable ? (
              <Webcam
                onUserMedia={() => setWebcamEnable(true)}
                onUserMediaError={() => setWebcamEnable(false)}
                style={{ height: 300, width: 300 }}
                mirrored={true}
              />
            ) : (
              <>
                <WebcamIcon className="h-96 w-full my-7 p-20 bg-secondary rounded-lg border" />
                <Button variant="ghost" className="w-full" onClick={() => setWebcamEnable(true)}>
                  Enable Web Cam and Microphone
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-end items-end">
        <Button>
            Start Interview
          </Button>
        </div>
      </div>
    </>
  );
};

export default Interview;
