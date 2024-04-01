import React, { useState, useEffect } from "react";
import axios from "axios";

function Whisper() {
  const [result, setResult] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const newMediaRecorder = new MediaRecorder(stream);
          let chunks = []; // Move `chunks` inside useEffect

          newMediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
          };

          newMediaRecorder.onstop = async () => {
            const audioBlob = new Blob(chunks, { type: "audio/webm" });
            // Create FormData to send the audio blob
            const formData = new FormData();
            formData.append("audio", audioBlob, "audio.webm");

            try {
              // Use axios to send the FormData
              const response = await axios({
                method: "post",
                url: "http://localhost:4000/speechToText",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
              });
              setResult(response.data);
            } catch (error) {
              console.error(error);
            }

            chunks = []; // Reset chunks after blob creation and FormData submission
          };

          setMediaRecorder(newMediaRecorder);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    }
  }, [result]);
  console.log(result.data?.text);
  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      mediaRecorder.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <main>
      <div>
        <button onClick={recording ? stopRecording : startRecording}>
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>
    </main>
  );
}

export default Whisper;
