"use client";

import Header from "@/app/dashboard/_components/Header";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { eq } from "drizzle-orm";
import { ChevronsUpDownIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

interface resultInterface {
  id: number;
  createdAt: string | null;
  mockIdRef: string;
  question: string;
  correctAns: string | null;
  userAns: string | null;
  feedback: string | null;
  rating: string | null;
  userEmail: string | null;
}

const FeedbackPage = ({ params }: any) => {
  const [avgRating, setAvgRating] = useState<number>(0);
  const [feedbackList, setFeedbackList] = useState<resultInterface[]>([]);
  const router = useRouter();

  const normalizeRating = (rating: number, maxRating: number) => {
    if (maxRating === 5) {
      return (rating / 5) * 10;
    }
    return rating;
  };

  const GetFeedback = useCallback(async () => {
    const result: resultInterface[] = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedbackList(result);

    if (result.length > 0) {
      const normalizedRatings = result.map((item) => {
        const rating = Number(item.rating);
        if (!isNaN(rating)) {
          return normalizeRating(rating, rating > 5 ? 10 : 5);
        }
        return 0;
      });

      const total = normalizedRatings.reduce((acc, rating) => acc + rating, 0);
      const average = total / normalizedRatings.length;
      setAvgRating(average);
    }
  }, [params.interviewId]);

  useEffect(() => {
    GetFeedback();
  }, [GetFeedback]);

  return (
    <>
      <Header />
      <div className="p-10">
        {feedbackList.length === 0 ? (
          <h2 className="font-bold text-xl text-gray-500">
            No Interview Feedback Record Found
          </h2>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-green-500">
              Congratulations!
            </h2>
            <h2 className="font-bold text-2xl">
              Here is your interview feedback
            </h2>
            <h2 className="text-purple-600 text-lg my-3">
              Your overall Interview Rating: <strong>{avgRating.toFixed(1)}/10</strong>
            </h2>
            <h2 className="text-sm text-gray-500">
              Find Below Interview Questions with Correct Answer, Your Answer
              and Feedback for improvement.
            </h2>
            {feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full">
                  {item.question}
                  <ChevronsUpDownIcon className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer: </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-purple-600">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </>
        )}
        <Button onClick={() => router.replace(`/`)}>Go Home</Button>
      </div>
    </>
  );
};

export default FeedbackPage;
