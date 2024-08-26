// src/Chatbot.js
import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add the user message to the messages array
    setMessages([...messages, { role: "user", text: input }]);

    try {
      // Send the user message to the ChatGPT API
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: `User: ${input}\nChatGPT:`,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY",
          },
        }
      );

      // Extract the bot response from the API response
      const botResponse = response.data.choices[0].text;

      // Add the bot response to the messages array
      setMessages([...messages, { role: "bot", text: botResponse }]);

      // Clear the input field
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        <div className="messages">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="border-black border-1 mr-4 rounded"
          />
          <button
            onClick={handleSendMessage}
            className="bg-primary text-white px-4 py-1 rounded "
          >
            Send
          </button>
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message.role === "bot" ? (
                <div className="bot-message">{message.text}</div>
              ) : (
                <div className="user-message">{message.text}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
