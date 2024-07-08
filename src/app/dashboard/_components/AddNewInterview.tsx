"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAiModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPos, setJobPos] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExp, setJobExp] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(jobDesc, jobExp, jobPos);

    const InputPrompt = `job position - ${jobPos}, job description - ${jobDesc}, Years of experience - ${jobExp}. Depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview question and answer in json format. give question and answer as field in json.`;

    try {
      // Requesting data from the chat session
      const result = await chatSession.sendMessage(InputPrompt);
      const MockJsonResp = await result.response
        .text()
        .replace("```json", "")
        .replace("```", "");

      console.log(JSON.parse(MockJsonResp));
      setJsonResponse(MockJsonResp);

      // Inserting data into the database
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPos: jobPos,
          jobDesc: jobDesc,
          jobExp: jobExp,
          createdBy: user?.primaryEmailAddress?.emailAddress || "",
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log("Inserted Id:", resp);
      if (resp && resp[0]?.mockId) {
        setOpenDialog(false);
        router.push(`/dashboard/interview/${resp[0].mockId}`);
      } else {
        throw new Error("Failed to get the mock interview ID.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Something went wrong. Please try again later."); // Error toast notification
    } finally {
      setLoading(false); // Ensure loading state is always reset
    }
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <div>
                  <h2>Add Details about your job interview</h2>
                  <div className="mt-7 my-3">
                    <label>Job Role/Position</label>
                    <Input
                      placeholder="e.g. Full Stack Developer"
                      required
                      onChange={(e) => setJobPos(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description/Tech Stack</label>
                    <Textarea
                      placeholder="e.g. MERN Stack"
                      required
                      maxLength={50}
                      onChange={(e) => setJobDesc(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="5"
                      type="number"
                      required
                      max={10}
                      onChange={(e) => setJobExp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        Generating from AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <ToastContainer /> {/* Ensure ToastContainer is included */}
    </div>
  );
};

export default AddNewInterview;
