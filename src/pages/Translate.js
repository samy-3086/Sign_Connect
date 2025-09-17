import React, { useState } from "react";
import VideoInput from "../components/VideoInput";
import TextOutput from "../components/TextOutput";
import SpeechButton from "../components/SpeechButton";
import { translateSignToText } from "../services/api";

function Translate() {
  const [translation, setTranslation] = useState("");

  const handleTranslate = async (videoData) => {
    try {
      const res = await translateSignToText(videoData);
      setTranslation(res.data.translation);
    } catch (err) {
      console.error("Translation error:", err);
    }
  };

  return (
    <div className="translate-page">
      <h2>Sign Language Translator</h2>
      <VideoInput onTranslate={handleTranslate} />
      <TextOutput text={translation} />
      <SpeechButton text={translation} />
    </div>
  );
}

export default Translate;
