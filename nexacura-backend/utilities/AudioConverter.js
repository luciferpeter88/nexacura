/* The AudioConverter class in JavaScript uses fluent-ffmpeg to convert WebM audio files to MP3 format. */
const ffmpeg = require("fluent-ffmpeg");

class AudioConverter {
  constructor(options) {
    this.options = options;
  }

  convertWebMToMP3(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .toFormat("mp3")

        .on("error", (err) => {
          console.error("An error occurred during conversion:", err.message);
          reject(err);
        })
        .on("end", () => {
          console.log("Conversion to MP3 completed successfully.");
          resolve(outputPath);
        })
        .saveToFile(outputPath);
    });
  }
}

module.exports = AudioConverter;
