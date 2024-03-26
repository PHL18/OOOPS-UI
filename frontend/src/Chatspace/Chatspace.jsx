import React, { useState } from 'react';
import './Chatspace.scss';

function Chatspace() {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const inputField = e.target.elements.messageInput;
    const messageText = inputField.value.trim();
    if (messageText !== "") {
      const newMessage = {
        text: messageText,
        sender: "user"
      };
      setMessages([...messages, newMessage]);
      inputField.value = "";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleMessageSend} className="message-input-form">
        <input
          type="text"
          name="messageInput"
          placeholder="Type your message..."
          autoComplete="off"
        />
        <button type="submit">⬆</button>
      </form>
    </div>
  );
}

export default Chatspace;
