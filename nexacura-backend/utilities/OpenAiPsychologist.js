const axios = require("axios");
const DynamicFolderCreator = require("./DynamicFolderCreator");
const ConversationHistoryManager = require("./ConversationHistoryManager");

class OpenAiPsychologist {
  constructor(request) {
    this.apiKey = "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";
    this.request = request;
  }

  async answer(userText) {
    // Define the payload directly as a JavaScript object
    const payload = {
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI Psychologist who is going to provide useful conversation for people who are suffering from mental disorders.",
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
      const txtPath = new DynamicFolderCreator(
        this.request,
        "output_txt"
      ).createFolder();
      console.log(txtPath, "dynamicFolder");
      console.log(response.data.choices[0].message);
      const historymanager = new ConversationHistoryManager(
        txtPath,
        "conversationHistory.txt"
      );
      // Append the conversation to the history file
      const email = this.request.session.user.email;
      const role = response.data.choices[0].message.role;
      const message = response.data.choices[0].message.content;

      if (email) {
        historymanager.appendToHistory(email);
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
