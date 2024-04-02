const axios = require("axios");
const DynamicFolderCreator = require("./DynamicFolderCreator");
const ConversationHistoryManager = require("./ConversationHistoryManager");

class OpenAiPsychologist {
  constructor(request) {
    this.apiKey = "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";
    this.request = request;
  }

  async answer(userText) {
    const txtPath = new DynamicFolderCreator(
      this.request,
      "output_txt"
    ).createFolder();
    const historymanager = new ConversationHistoryManager(
      txtPath,
      "conversationHistory.txt"
    );
    // Define the payload directly as a JavaScript object
    const payload = {
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: historymanager.readConversationHistory(),
        },
        { role: "user", content: userText },
      ],
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        payload, // Send the payload as JSON
        {
          headers: {
            "Content-Type": "application/json", // Set Content-Type to application/json
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      console.log(txtPath, "dynamicFolder");
      console.log(response.data.choices[0].message);

      // Append the conversation to the history file
      const name = this.request.session.user.name;
      const role = response.data.choices[0].message.role;
      const message = response.data.choices[0].message.content;

      if (name) {
        historymanager.appendToHistory(name);
        historymanager.appendToHistory(userText);
        historymanager.appendToHistory(role);
        historymanager.appendToHistory(message);
      }

      return response.data; // Assuming you want to return the response data
    } catch (error) {
      console.error("Error in answer:", error.message);
      throw error; // Rethrow or handle as needed
    }
  }
}

module.exports = OpenAiPsychologist;
