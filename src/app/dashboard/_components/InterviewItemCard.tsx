import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewItemCard = ({interview}:any) => {

    const router = useRouter();

    const handleStart = () => {
        router.push(`/dashboard/interview/${interview?.mockId}`)
    }

    const handleFeedback = () => {
        router.push(`/dashboard/interview/${interview?.mockId}/feedback`)
    }

  return (
    <div className='border shadow-sm rounded-lg p-3'>
      <h2 className='font-bold text-purple-600'>{interview?.jobPos}</h2> 
      <h2 className='text-sm text-gray-600'>{interview?.jobExp} Years of Experience</h2>
      <h2 className='textxs text-gray-400'>Created At: {interview?.createdAt}</h2>
      <div className='flex justify-between mt-2 gap-5'>
        <Button size="sm" variant="outline" className='w-full' onClick={handleFeedback}>Feedback</Button>
        <Button size="sm" className='w-full bg-purple-600' onClick={handleStart}>Start</Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
