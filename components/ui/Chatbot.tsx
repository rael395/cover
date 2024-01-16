import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const initializeChatComponent = () => {
      // Check if the chat container exists
      var chatContainer = document.getElementById('chat-container');
      
      // If the chat container doesn't exist, create it
      if (!chatContainer) {
        chatContainer = document.createElement('div');
        chatContainer.id = 'chat-container';
        document.body.appendChild(chatContainer);
      }

      // Initialize the Chat component
      if (window.ChatComponent) {
        window.ChatComponent.init('AqQlRmj27cFjCLP3MG2W', '#chat-container');
      } else {
        console.error('ChatComponent is not available');
      }
    };

    // Run the initialization on component mount
    initializeChatComponent();
  }, []);

  return <div id="chat-container"></div>;
};

export default Chatbot;
