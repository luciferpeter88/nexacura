// import "./Avatar.css";
import React from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import { createAvatarSynthesizer, createWebRTCConnection } from "./Utility";
import { avatarAppConfig } from "./config";
import { useState } from "react";
import { useRef } from "react";
import authenticationContext from "../../context/authenticationContext";
import Whisper from "../Whisper/Whisper";

export const Avatar = () => {
  const { initial } = React.useContext(authenticationContext);
  console.log(initial);
  const [avatarSynthesizer, setAvatarSynthesizer] = useState(null);
  const myAvatarVideoEleRef = useRef();
  const myAvatarAudioEleRef = useRef();
  const buttonRef = useRef(null);
  const logoutButtonRef = useRef(null);
  const speakRef = useRef(null);

  const [mySpeechText, setMySpeechText] = useState("Hello, I am your Avatar.");

  var iceUrl = avatarAppConfig.iceUrl;
  var iceUsername = avatarAppConfig.iceUsername;
  var iceCredential = avatarAppConfig.iceCredential;

  React.useEffect(() => {
    setMySpeechText(initial.avatarAnswer);
  }, [initial.avatarAnswer]);
  console.log("Printing mySpeechText ", mySpeechText);

  const handleOnTrack = (event) => {
    console.log("#### Printing handle onTrack ", event);

    // Update UI elements
    console.log("Printing event.track.kind ", event.track.kind);
    if (event.track.kind === "video") {
      const mediaPlayer = myAvatarVideoEleRef.current;
      mediaPlayer.id = event.track.kind;
      mediaPlayer.srcObject = event.streams[0];
      mediaPlayer.autoplay = true;
      mediaPlayer.playsInline = true;
      mediaPlayer.addEventListener("play", () => {
        window.requestAnimationFrame(() => {});
      });
    } else {
      const audioPlayer = myAvatarAudioEleRef.current;
      audioPlayer.srcObject = event.streams[0];
      audioPlayer.autoplay = true;
      audioPlayer.playsInline = true;
      audioPlayer.muted = true;
    }
  };

  const stopSpeaking = () => {
    avatarSynthesizer
      .stopSpeakingAsync()
      .then(() => {
        console.log(
          "[" + new Date().toISOString() + "] Stop speaking request sent."
        );
      })
      .catch();
  };

  const stopSession = () => {
    try {
      //Stop speaking
      avatarSynthesizer
        .stopSpeakingAsync()
        .then(() => {
          console.log(
            "[" + new Date().toISOString() + "] Stop speaking request sent."
          );
          // Close the synthesizer
          avatarSynthesizer.close();
          console.log("[" + new Date().toISOString() + "] Avatar closed.");
        })
        .catch();
    } catch (e) {}
  };

  const speakSelectedText = () => {
    //Start speaking the text
    const audioPlayer = myAvatarAudioEleRef.current;
    console.log("Audio muted status ", audioPlayer.muted);
    audioPlayer.muted = false;
    avatarSynthesizer
      .speakTextAsync(mySpeechText)
      .then((result) => {
        if (
          result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted
        ) {
          console.log("Speech and avatar synthesized to video stream.");
        } else {
          console.log("Unable to speak. Result ID: " + result.resultId);
          if (result.reason === SpeechSDK.ResultReason.Canceled) {
            let cancellationDetails =
              SpeechSDK.CancellationDetails.fromResult(result);
            console.log(cancellationDetails.reason);
            if (
              cancellationDetails.reason === SpeechSDK.CancellationReason.Error
            ) {
              console.log(cancellationDetails.errorDetails);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
        avatarSynthesizer.close();
      });
  };

  const startSession = () => {
    let peerConnection = createWebRTCConnection(
      iceUrl,
      iceUsername,
      iceCredential
    );
    console.log("Peer connection ", peerConnection);
    peerConnection.ontrack = handleOnTrack;
    peerConnection.addTransceiver("video", { direction: "sendrecv" });
    peerConnection.addTransceiver("audio", { direction: "sendrecv" });

    let avatarSynthesizer = createAvatarSynthesizer();
    setAvatarSynthesizer(avatarSynthesizer);
    peerConnection.oniceconnectionstatechange = (e) => {
      console.log("WebRTC status: " + peerConnection.iceConnectionState);

      if (peerConnection.iceConnectionState === "connected") {
        console.log("Connected to Azure Avatar service");
      }

      if (
        peerConnection.iceConnectionState === "disconnected" ||
        peerConnection.iceConnectionState === "failed"
      ) {
        console.log("Azure Avatar service Disconnected");
      }
    };

    avatarSynthesizer
      .startAvatarAsync(peerConnection)
      .then((r) => {
        console.log("[" + new Date().toISOString() + "] Avatar started.");
      })
      .catch((error) => {
        console.log(
          "[" +
            new Date().toISOString() +
            "] Avatar failed to start. Error: " +
            error
        );
      });
  };

  return (
    <div className="h-full  w-full  flex flex-col items-center">
      <Whisper />
      <div id="myAvatarVideo" className="myVideoDiv">
        <video
          className="myAvatarVideoElement"
          ref={myAvatarVideoEleRef}
        ></video>

        <audio ref={myAvatarAudioEleRef}></audio>
      </div>
      <div className="myButtonGroup d-flex justify-content-around bg-red-500 z-[1500] absolute top-0 left-0">
        <button
          className="btn btn-success cursor-pointer "
          ref={buttonRef}
          onClick={startSession}
        >
          Connect
        </button>
        <button
          className="btn btn-danger "
          onClick={stopSession}
          ref={logoutButtonRef}
        >
          Disconnect
        </button>
      </div>

      <div className="myTextArea">
        {/* <textarea className="myTextArea" onChange={handleSpeechText}></textarea> */}
        <div className="myButtonGroup d-flex justify-content-around absolute top-0 right-1">
          <button
            className="btn btn-success"
            ref={speakRef}
            onClick={speakSelectedText}
          >
            Speak
          </button>
          <button className="btn btn-warning" onClick={stopSpeaking}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};
