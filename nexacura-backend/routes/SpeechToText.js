const BaseRoute = require("../routes/Baseroute");
const upload = require("../middlewares/multerAudio");
const AudioConverter = require("../utilities/AudioConverter");
const DynamicFolderCreator = require("../utilities/DynamicFolderCreator");
const WhisperTranscriber = require("../utilities/WhisperTranscriber");
const OpenAiPsychologist = require("../utilities/OpenAiPsychologist");

class SpeechToText extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", upload.single("audio"), async (request, response) => {
      try {
        if (request.file) {
          // Correctly get the input and output paths
          const inputPath = request.file.destination;
          const dynamicFolder = new DynamicFolderCreator(
            request,
            "output_audio"
          );
          const outputPath = dynamicFolder.createFolder();
          // Correctly create the AudioConverter instance and convert the file to mp3
          const audioConverter = new AudioConverter();
          const readFile = await audioConverter.convertWebMToMP3(
            `${inputPath}/${request.file.filename}`,
            `${outputPath}/${request.file.filename}.mp3`
          );
          // Correctly create the WhisperTranscriber instance and transcribe the audio
          const transcriber = new WhisperTranscriber();
          const responseData = await transcriber.transcribeAudio(readFile);
          const openAi = new OpenAiPsychologist(request);
          const answer = await openAi.answer(responseData.text);
          console.log(responseData, "responseData");
          response.status(200).json({
            message: answer,
          });
        } else {
          response.status(400).json({ message: "No file uploaded." });
        }
      } catch (error) {
        console.error("Error processing the request:", error.message);
        response.status(500).json({ error: error.message });
      }
    });
  }
}

module.exports = SpeechToText;
