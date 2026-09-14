// frontend/app/protected/result/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime, AssistantChatTransport } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/elements/thread.aui";

export default function ChatPage() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });

  const seeded = useRef(false);

  useEffect(() => {
    if (seeded.current) return;
    const firstMessage = sessionStorage.getItem("chat:lastMessage");
    if (firstMessage) {
      seeded.current = true;
      sessionStorage.removeItem("chat:lastMessage");
      runtime.thread.append({
        role: "user",
        content: [{ type: "text", text: firstMessage }],
      });
    }
  }, [runtime]);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="h-screen w-full bg-[#faf9f6]">
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
}
