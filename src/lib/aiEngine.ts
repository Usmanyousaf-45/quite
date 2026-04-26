import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function speak(text: string) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find(v => v.lang.includes("en")) || voices[0];

    utterance.voice = voice;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }
}

export function handleAICommand(text: string, router: AppRouterInstance) {
  const command = text.toLowerCase();

  // 🔹 NAVIGATION (NO VOICE)
  if (command.includes("home")) return router.push("/");
  if (command.includes("about")) return router.push("/about");
  if (command.includes("contact")) return router.push("/contact");
  if (command.includes("projects")) return router.push("/projects");
  if (command.includes("skills")) return router.push("/skills");

  // 🔥 PROJECTS
  if (command.includes("usman gpt")) {
    speak("Opening Usman GPT");
    return window.open("https://usman-gpt.vercel.app/", "_blank");
  }

  if (command.includes("billing")) {
    speak("Opening billing app");
    return window.open("https://billing-psi-eight.vercel.app/", "_blank");
  }

  if (command.includes("ecommerce")) {
    speak("Opening e commerce store");
    return window.open("https://e-commerece-two-theta.vercel.app/", "_blank");
  }

  // 🔥 SOCIAL
  if (command.includes("facebook")) {
    speak("Opening Facebook");
    return window.open("https://www.facebook.com/profile.php?id=61578277601062", "_blank");
  }

  if (command.includes("instagram")) {
    speak("Opening Instagram");
    return window.open("https://www.instagram.com/futurebiosai/", "_blank");
  }

  if (command.includes("tiktok")) {
    speak("Opening TikTok");
    return window.open("https://www.tiktok.com/@usmanyousaf508", "_blank");
  }

  if (command.includes("whatsapp")) {
    speak("Opening WhatsApp");
    return window.open("https://wa.me/923428875879", "_blank");
  }

  if (command.includes("linkedin")) {
    speak("Opening LinkedIn");
    return window.open("https://linkedin.com", "_blank");
  }

  // ❌ DEFAULT
  speak("Sorry, I did not understand");
}