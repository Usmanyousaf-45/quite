import { handleAICommand } from "./aiEngine";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function startVoice(router: AppRouterInstance) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Speech Recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;

    handleAICommand(transcript, router);
  };

  recognition.onerror = (event) => {
    console.log("Speech error:", event);
  };

  recognition.start();
}