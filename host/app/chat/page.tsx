"use client";
import dynamic from "next/dynamic";

const ChatPage = dynamic(() => import("chat/ChatPage"), { ssr: false });

export default function ChatRoute() {
  return <ChatPage />;
}
