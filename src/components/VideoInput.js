import React from "react";

function VideoInput({ onTranslate }) {
  const handleUpload = () => {
    const dummyVideoData = "sample_video_data";
    onTranslate(dummyVideoData);
  };

  return (
    <div className="video-input">
      <button className="icon-btn" onClick={handleUpload}>
        🎥 Record / Upload
      </button>
    </div>
  );
}

export default VideoInput;
