import React from "react";

function SpeechButton({ text }) {
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <button className="icon-btn" onClick={speak} disabled={!text}>
      🔊 Speak
    </button>
  );
}

export default SpeechButton;
