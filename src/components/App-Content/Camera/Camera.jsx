import React, { useRef, useEffect } from "react";
import "./Camera.css";

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera: ", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-container">
      <div className="camera-preview">
        <video ref={videoRef} autoPlay playsInline />
      </div>

      {/* Static Capture Button */}
      <button className="capture-btn"></button>
    </div>
  );
};

export default Camera;
