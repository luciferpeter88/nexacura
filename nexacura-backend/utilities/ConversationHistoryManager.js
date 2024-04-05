/* The ConversationHistoryManager class manages a conversation history stored in a text file by
providing methods to append messages, read the history, and clear the history. */
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
