import React, { useState } from "react";
import VideoInput from "../components/VideoInput";
import TextOutput from "../components/TextOutput";
import SpeechButton from "../components/SpeechButton";

function Translate() {
  const [prediction, setPrediction] = useState("");

  // ---- ML API call ----
  const sendFrame = async (blob) => {
    try {
      const formData = new FormData();
      formData.append("file", blob, "frame.jpg");

      const res = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error("Prediction error:", err);
    }
  };

  return (
    <div className="translate-page">
      <h2>Sign Language Translator</h2>
      {/* Pass sendFrame to VideoInput */}
      <VideoInput onTranslate={sendFrame} />
      <TextOutput text={prediction} />
      <SpeechButton text={prediction} />
    </div>
  );
}

export default Translate;
