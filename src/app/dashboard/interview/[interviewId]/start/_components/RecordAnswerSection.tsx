import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';

const RecordAnswerSection = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results.map((result) => {
      typeof result === 'string' ? setUserAnswer(prevAns => prevAns+result) : setUserAnswer(prevAns => prevAns+result?.transcript)
    })
  }, [results])

  return (
    <div className='flex items-center justify-center flex-col p-5'>
      <div className='flex flex-col justify-center items-center bg-secondary rounded-lg p-5 mt-20 bg-black w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl'>
        <Image src={'/webcam.png'} alt='webcam-image' width={200} height={200} className='absolute' />
        <Webcam style={{ height: 300, width: "100%", zIndex: 10 }} mirrored />
      </div>
      <Button variant="outline" className='my-10' onClick={isRecording?stopSpeechToText:startSpeechToText}>
        {isRecording?
        <h2 className='text-red-600 flex gap-2'>
          <Mic/> Stop Recording
        </h2> : "Record Answer"}        
      </Button>
      <Button onClick={() => console.log(userAnswer)}>
        Show User Answer
      </Button>
    </div>
  );
};

export default RecordAnswerSection;