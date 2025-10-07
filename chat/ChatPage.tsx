"use client";
import { useRouter } from "next/navigation";
import { Button } from "shared/Button";

export default function ChatPage() {
  const router = useRouter();

  const handleRedirectToAssessment = () => {
    router.push("/assessment");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Chat Page</h1>
      <p className="mb-4">This is the chat page component.</p>
      <Button onClick={handleRedirectToAssessment}>Go to Assessment</Button>
    </div>
  );
}
