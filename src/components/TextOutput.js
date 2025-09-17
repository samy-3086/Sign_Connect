import React from "react";

function TextOutput({ text }) {
  return (
    <div className="text-output">
      <h3>Translation Result</h3>
      {text ? (
        <p className="output-box">{text}</p>
      ) : (
        <p className="placeholder">Your translation will appear here...</p>
      )}
    </div>
  );
}

export default TextOutput;
