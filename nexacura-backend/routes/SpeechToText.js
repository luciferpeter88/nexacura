// speechToText

const BaseRoute = require("../routes/Baseroute");
const upload = require("../middlewares/multerAudio");

class SpeechToText extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", upload.single("audio"), async (request, response) => {
      try {
        if (request.file) {
          console.log(request.file);
          response.status(200).json({ message: "File uploaded." });
          // const audioFileBuffer = await fs.readFile(
          //   `public/uploads/${req.file.filename}`
          // );
          // const formData = new FormData();
          // formData.append("model", "whisper-1"); // Specify the whisper-1 model which you want to use
          // formData.append("file", audioFileBuffer, {
          //   filename: "hey.mp3",
          //   contentType: "audio/mp3",
          // });
          // const response = await axios.post(
          //   "https://api.openai.com/v1/audio/transcriptions",
          //   formData,
          //   {
          //     headers: {
          //       ...formData.getHeaders(),
          //       Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          //     },
          //   }
          // );
        } else {
          response.status(200).json({ message: "No file uploaded." });
        }
      } catch (error) {
        console.error("Error creating translation:", error.message);
        throw error;
      }
    });
  }
}

module.exports = SpeechToText;
