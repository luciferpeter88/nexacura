const BaseRoute = require("../routes/Baseroute");
const upload = require("../middlewares/multerAudio");
const fs = require("fs"); // Corrected this line
const FormData = require("form-data");
const axios = require("axios");
const AudioConverter = require("../utilities/AudioConverter");

class SpeechToText extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
    this.api = "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";
  }

  initializeRoutes() {
    this.router.post("/", upload.single("audio"), async (request, response) => {
      try {
        if (request.file) {
          console.log(request.file);
          const audioConverter = new AudioConverter();
          const inputPath = `uploads/input_audio/${request.file.filename}`;
          const outputPath = await audioConverter.convertWebMToMP3(
            inputPath,
            `uploads/output_audio/${request.file.filename}.mp3`
          );
          console.log(`Conversion successful. Output file: ${outputPath}`);

          // Correctly create FormData
          const formData = new FormData();
          formData.append("model", "whisper-1");
          formData.append("file", fs.createReadStream(outputPath));

          // Send the FormData with axios
          const responseData = await axios.post(
            "https://api.openai.com/v1/audio/transcriptions",
            formData,
            {
              headers: {
                ...formData.getHeaders(),
                Authorization: `Bearer ${this.api}`,
              },
            }
          );
          console.log(responseData.data, "responseData");
          response.status(200).json({
            message: "File uploaded and processed.",
            data: responseData.data,
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
