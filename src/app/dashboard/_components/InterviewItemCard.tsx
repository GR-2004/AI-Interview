import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Delete } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const InterviewItemCard = ({ interview, onDelete }: any) => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const handleStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  const handleFeedback = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const confirmDelete = async () => {
    if (interview.mockId) {
      await onDelete(interview.mockId);  // Call the onDelete prop to delete the interview
    }
    setOpenDialog(false);
  };

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <div className="flex justify-between">
        <h2 className="font-bold text-purple-600">{interview?.jobPos}</h2>
        <Delete className="cursor-pointer" onClick={handleDelete} />
      </div>
      <h2 className="text-sm text-gray-600">
        {interview?.jobExp} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-400">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={handleFeedback}
        >
          Feedback
        </Button>
        <Button
          size="sm"
          className="w-full bg-purple-600"
          onClick={handleStart}
        >
          Start
        </Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this interview?
          </DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InterviewItemCard;
