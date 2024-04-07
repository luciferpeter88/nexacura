/* This code snippet is defining and exporting a constant object named `avatarAppConfig`. This object
contains various configuration settings for an avatar application. These settings include the
cognitive service region, subscription key, voice name, avatar character, style, background color,
ICE server URL, ICE server username, and ICE server credential. By exporting this object, it can be
imported and used in other parts of the application where these configuration settings are required. */
export const avatarAppConfig = {
  cogSvcRegion: "westeurope",
  cogSvcSubKey: "YOUR_COGSVC_SUBSCRIPTION_KEY",
  voiceName: "en-GB-LibbyNeural",
  avatarCharacter: "lisa",
  avatarStyle: "casual-sitting",
  avatarBackgroundColor: "#FFFFFFFF",
  iceUrl: "stun:relay.communication.microsoft.com:3478",
  iceUsername: "YOUR_ICE_USERNAME",
  iceCredential: "YOUR_ICE_CREDENTIAL",
};
