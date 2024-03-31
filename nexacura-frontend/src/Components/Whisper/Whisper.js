import React, { useState, useEffect } from "react";
import axios from "axios";

function Whisper() {
  const [result, setResult] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  let chunks = [];
  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const newMediaRecorder = new MediaRecorder(stream);
          //let chunks = [];
          newMediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
          };
          newMediaRecorder.onstop = async () => {
            const audioBlob = new Blob(chunks, { type: "audio/webm" });

            // Create FormData to send the audio blob
            const formData = new FormData();
            formData.append("audio", audioBlob, "audio.webm"); // 'audio' is the fieldname expected by multer on the backend

            try {
              // Use axios to send the FormData
              const response = await axios({
                method: "post",
                url: "http://localhost:4000/speechToText",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              });
              setResult(response.data.message); // Assuming the server responds with an object that has a message property
            } catch (error) {
              console.error(error);
              alert(error.message);
            }
          };
          setMediaRecorder(newMediaRecorder);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    }
  }, []);

  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      chunks = [];
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
        {result && <p>{result}</p>}
      </div>
    </main>
  );
}

export default Whisper;
