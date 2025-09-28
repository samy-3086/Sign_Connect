import React, { useRef, useEffect } from "react";

function VideoInput({ onTranslate }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ask for webcam access
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });
  }, []);

  // Capture current frame
  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert to Blob (JPEG)
      canvas.toBlob((blob) => {
        if (blob) {
          onTranslate(blob); // Send to backend
        }
      }, "image/jpeg");
    }
  };

  return (
    <div className="video-input">
      <video ref={videoRef} autoPlay playsInline className="webcam" />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <button className="icon-btn" onClick={captureFrame}>
        📸 Capture & Translate
      </button>
    </div>
  );
}

export default VideoInput;
