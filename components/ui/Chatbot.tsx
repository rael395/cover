'use client';
// components/ui/Chatbot.js

import React, { useEffect } from 'react';

// Declare ChatComponent on the window object
declare global {
  interface Window {
    ChatComponent: {
      init: (param1: string, param2: string, options?: any) => void; // Adjust the types as per documentation
      // Add any other methods or properties if needed
    };
  }
}

const Chatbot = () => {
  useEffect(() => {
    const initializeChatComponent = () => {
      // Check if the chat container exists
      let chatContainer = document.getElementById('chat-container');
      
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
