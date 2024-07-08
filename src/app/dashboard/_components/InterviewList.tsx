"use client";

import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useCallback, useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface InterviewItem {
  id: number;
  jsonMockResp: string;
  jobPos: string;
  jobDesc: string;
  jobExp: string;
  createdBy: string;
  createdAt: string | null;
  mockId: string;
}

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState<InterviewItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const GetInterviewList = useCallback(async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      setLoading(true);
      try {
        const result = await db
          .select()
          .from(MockInterview)
          .where(
            eq(MockInterview.createdBy, user.primaryEmailAddress.emailAddress)
          )
          .orderBy(desc(MockInterview.id));
        console.log(result);
        setInterviewList(result);
      } catch (error) {
        console.error('Error fetching interview list:', error);
        toast.error('Failed to fetch interview list. Please try again later.');
      } finally {
        setLoading(false);
      }
    } else {
      console.log("User email address is undefined");
      toast.error('User email address is undefined. Please log in again.');
    }
  }, [user?.primaryEmailAddress?.emailAddress]);

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user, GetInterviewList]);

  const handleDelete = async (mockId: string) => {
    try {
      // Delete interview from the database
      await db.delete(MockInterview).where(eq(MockInterview.mockId, mockId));
      console.log(`Deleted interview with mockId: ${mockId}`);
      // Remove the deleted interview from the state
      setInterviewList((prevList) => prevList.filter((interview) => interview.mockId !== mockId));
      // Show success toast message
      toast.success('Interview deleted successfully.');
    } catch (error) {
      console.error('Error deleting interview:', error);
      toast.error('Failed to delete the interview. Please try again later.');
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Ensure ToastContainer is included */}
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
      {loading ? (
        <div className="flex justify-center items-center my-5">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {interviewList.length > 0 ? (
            interviewList.map((interview, index) => (
              <InterviewItemCard
                key={index}
                interview={interview}
                onDelete={handleDelete}  
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No previous interviews found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InterviewList;
