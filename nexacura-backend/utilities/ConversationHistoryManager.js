const fs = require("fs");
const path = require("path");

class ConversationHistoryManager {
  constructor(directoryPath, fileName = "conversationHistory.txt") {
    this.filePath = path.join(directoryPath, fileName);
    this.ensureFileExists();
  }

  ensureFileExists() {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, "");
    }
  }

  appendToHistory(message) {
    fs.appendFileSync(this.filePath, `${message}\n`);
  }

  readConversationHistory() {
    return fs.readFileSync(this.filePath, "utf-8");
  }

  clearHistory() {
    fs.writeFileSync(this.filePath, "");
  }
}

module.exports = ConversationHistoryManager;
