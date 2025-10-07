"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "shared/Button";

export default function AssessmentPage() {
  const router = useRouter();

  const handleRedirectToChat = () => {
    router.push("/chat");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Assessment Page</h1>
      <p className="mb-4">This is the assessment page component.</p>
      <Button onClick={handleRedirectToChat}>Go to Chat</Button>
    </div>
  );
}
