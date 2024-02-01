import { VOICE_FOR_LANGUAGE } from "../constants";
import { type Language } from "../types";

export const useTools = () => {
  const handleClipboard = (result: string) => {
    navigator.clipboard.writeText(result).catch(() => {});
  };

  const handleSpeak = (result: string, toLanguage: Language) => {
    const utterance = new SpeechSynthesisUtterance(result);
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage];
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  return {
    handleClipboard,
    handleSpeak,
  };
};
