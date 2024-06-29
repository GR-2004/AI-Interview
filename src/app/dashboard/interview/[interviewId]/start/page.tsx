"use client";
import Header from "@/app/dashboard/_components/Header";
import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const StartInterview = ({ params }: any) => {
  const [interviewData, setInterviewData] = useState<
    ResultInterface | undefined
  >(undefined);
  const [interviewQuestion, setInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
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

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setInterviewData(result[0]);
    setInterviewQuestion(jsonMockResp);
  };

  return (
    <>
      <Header />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* question */}
          <QuestionsSection
            interviewQuestion={interviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
          {/* video and autio recording */}
          <RecordAnswerSection
            interviewQuestion={interviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
          />
        </div>
        <div className="flex justify-end gap-6 mx-64">
          {activeQuestionIndex > 0 && (
            <Button
              onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
            >
              Previous Question
            </Button>
          )}
          {activeQuestionIndex != interviewQuestion?.length - 1 && (
            <Button
              onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
            >
              Next Question
            </Button>
          )}
          {activeQuestionIndex == interviewQuestion?.length - 1 && (
            <Link
              href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
            >
              <Button>End Interview</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default StartInterview;
