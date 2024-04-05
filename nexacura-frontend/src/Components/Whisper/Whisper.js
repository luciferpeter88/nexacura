/**
 * The Whisper component in React allows users to record audio using the browser's microphone, convert
 * it to text using a server endpoint, and display the result.
 * @returns The `Whisper` component is being returned. It is a functional component that allows the
 * user to start and stop recording audio using the browser's microphone. The component uses the
 * `useState` and `useEffect` hooks from React to manage state and side effects.
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import authenticationContext from "../../context/authenticationContext";

function Whisper() {
  const { dispatch } = React.useContext(authenticationContext);

  const [result, setResult] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [loading, setLoading] = useState(true);

  /* The `useEffect` hook in the Whisper component is responsible for setting up the functionality to
  record audio using the browser's microphone. Here's a breakdown of what it does: */
  useEffect(() => {
    if (typeof window !== "undefined") {
      /* The code snippet you provided is using the `navigator.mediaDevices.getUserMedia()` method to
     access the user's microphone and start capturing audio. Here's a breakdown of what the code is
     doing: */
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const newMediaRecorder = new MediaRecorder(stream);
          let chunks = []; // Move `chunks` inside useEffect

          /* The code `newMediaRecorder.ondataavailable` is setting up an event handler for the
         `dataavailable` event that is triggered when new audio data is available from the media
         recorder. When audio data becomes available, the event handler function `(e) => {
         chunks.push(e.data); }` is called. */
          newMediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
          };

          /* The code snippet you provided is setting up an asynchronous function that executes when the
        `onstop` event of the `MediaRecorder` object (`newMediaRecorder`) is triggered. Here's a
        breakdown of what it does: */
          newMediaRecorder.onstop = async () => {
            const audioBlob = new Blob(chunks, { type: "audio/webm" });
            // Create FormData to send the audio blob
            const formData = new FormData();
            formData.append("audio", audioBlob, "audio.webm");

            /* The code snippet you provided is an asynchronous function that is responsible for sending
           the recorded audio data to a server endpoint for conversion to text using the `axios`
           library. Here's a breakdown of what it does: */
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
              setLoading(false);
              dispatch({
                type: "AVATAR_ANSWER",
                payload: response.data.message,
              });
            } catch (error) {
              console.error(error);
            }

            chunks = []; // Reset chunks after blob creation and FormData submission
          };

          /* The line `setMediaRecorder(newMediaRecorder);` in the Whisper component is updating the
         state variable `mediaRecorder` with the new MediaRecorder object `newMediaRecorder`. By
         calling `setMediaRecorder(newMediaRecorder)`, the component triggers a re-render with the
         updated `mediaRecorder` state, ensuring that the component reflects the new MediaRecorder
         object that was created when accessing the user's microphone and setting up audio recording
         functionality. */
          setMediaRecorder(newMediaRecorder);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
        });
    }
  }, [result]);
  if (!loading) {
    console.log(result);
  }
  /**
   * The `startRecording` function starts recording if the `mediaRecorder` is available and in an
   * inactive state.
   */
  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      mediaRecorder.start();
      setRecording(true);
    }
  };

  /**
   * The `stopRecording` function checks if a media recorder is currently recording and stops it if it
   * is.
   */
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <button
      className={`w-full ${
        recording
          ? "bg-red-500 hover:bg-red-500"
          : "bg-green-500 hover:bg-green-500"
      }   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      onClick={recording ? stopRecording : startRecording}
    >
      {recording ? "Stop Recording" : "Start Recording"}
    </button>
  );
}

export default Whisper;
