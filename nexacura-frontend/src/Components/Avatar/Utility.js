import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import { avatarAppConfig } from "./config";
const cogSvcRegion = avatarAppConfig.cogSvcRegion;
const cogSvcSubKey = avatarAppConfig.cogSvcSubKey;
const voiceName = avatarAppConfig.voiceName;
const avatarCharacter = avatarAppConfig.avatarCharacter;
const avatarStyle = avatarAppConfig.avatarStyle;
const avatarBackgroundColor = "#FFFFFFFF";

/**
 * The function creates a WebRTC connection using the specified ICE server URL, username, and
 * credential.
 * @param iceServerUrl - Ice server URL is the URL of the ICE (Interactive Connectivity Establishment)
 * server that helps in establishing a connection between peers in a WebRTC communication.
 * @param iceServerUsername - The `iceServerUsername` parameter in the `createWebRTCConnection`
 * function is used to specify the username for connecting to the ICE server. This username is
 * typically required when setting up ICE servers for WebRTC connections to establish communication
 * between peers.
 * @param iceServerCredential - The iceServerCredential parameter typically refers to the password or
 * credential required to authenticate with the ICE (Interactive Connectivity Establishment) server.
 * This credential is used to establish a connection for WebRTC communication.
 * @returns The function `createWebRTCConnection` returns a new `RTCPeerConnection` object configured
 * with the provided ICE server URL, username, and credential.
 */
export const createWebRTCConnection = (
  iceServerUrl,
  iceServerUsername,
  iceServerCredential
) => {
  var peerConnection = new RTCPeerConnection({
    iceServers: [
      {
        urls: [iceServerUrl],
        username: iceServerUsername,
        credential: iceServerCredential,
      },
    ],
  });

  return peerConnection;
};

/**
 * The function `createAvatarSynthesizer` creates an avatar synthesizer with specified configurations
 * for speech synthesis and video format.
 * @returns The `createAvatarSynthesizer` function returns an instance of `SpeechSDK.AvatarSynthesizer`
 * configured with the specified speech synthesis settings, avatar character, style, video format, and
 * background color.
 */
export const createAvatarSynthesizer = () => {
  const speechSynthesisConfig = SpeechSDK.SpeechConfig.fromSubscription(
    cogSvcSubKey,
    cogSvcRegion
  );

  speechSynthesisConfig.speechSynthesisVoiceName = voiceName;

  const videoFormat = new SpeechSDK.AvatarVideoFormat();

  let videoCropTopLeftX = 600;
  let videoCropBottomRightX = 1320;
  videoFormat.setCropRange(
    new SpeechSDK.Coordinate(videoCropTopLeftX, 50),
    new SpeechSDK.Coordinate(videoCropBottomRightX, 1080)
  );

  const talkingAvatarCharacter = avatarCharacter;
  const talkingAvatarStyle = avatarStyle;

  const avatarConfig = new SpeechSDK.AvatarConfig(
    talkingAvatarCharacter,
    talkingAvatarStyle,
    videoFormat
  );
  avatarConfig.backgroundColor = avatarBackgroundColor;
  let avatarSynthesizer = new SpeechSDK.AvatarSynthesizer(
    speechSynthesisConfig,
    avatarConfig
  );

  avatarSynthesizer.avatarEventReceived = function (s, e) {
    var offsetMessage =
      ", offset from session start: " + e.offset / 10000 + "ms.";
    if (e.offset === 0) {
      offsetMessage = "";
    }
    console.log(
      "[" +
        new Date().toISOString() +
        "] Event received: " +
        e.description +
        offsetMessage
    );
  };

  return avatarSynthesizer;
};
