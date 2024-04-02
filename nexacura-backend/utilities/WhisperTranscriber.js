const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");

class WhisperTranscriber {
  constructor() {
    this.apiKey = "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";
  }

  async transcribeAudio(readFile) {
    const formData = new FormData();
    formData.append("model", "whisper-1");
    formData.append("file", fs.createReadStream(readFile));

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error in transcribing audio:", error.message);
      throw error; // Rethrow or handle as needed
    }
  }
}

module.exports = WhisperTranscriber;
