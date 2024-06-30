'use client';
import { db } from '@/lib/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import InterviewItemCard from './InterviewItemCard';

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

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(MockInterview.id));
      console.log(result);
      setInterviewList(result);
    } else {
      // Handle the case where the email address is undefined
      console.log('User email address is undefined');
    }
  };

  return (
    <div>
      <h2 className='font-medium text-xl'>Previous Mock Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'> 
        {interviewList.map((interview, index) => (
            <InterviewItemCard key={index} interview={interview}/>
        ))}
      </div>
    </div>
  );
};

export default InterviewList;
