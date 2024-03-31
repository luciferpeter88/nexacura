const ffmpeg = require("fluent-ffmpeg");

class AudioConverter {
  constructor(options) {
    this.options = options; // Options could include various settings for conversion.
  }

  convertWebMToMP3(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .toFormat("mp3")
        // Use this.options in the conversion process if needed.
        // .outputOptions(...) // Example of using options in the conversion.
        .on("error", (err) => {
          console.error("An error occurred during conversion:", err.message);
          reject(err);
        })
        .on("end", () => {
          console.log("Conversion to MP3 completed successfully.");
          resolve(outputPath); // Resolve the promise with the outputPath
        })
        .saveToFile(outputPath);
    });
  }
}

module.exports = AudioConverter;
