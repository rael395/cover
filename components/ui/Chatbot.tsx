import React from 'react'

const Chatbot = () => {
  return( 
    <script defer src="https://openai-widget.web.app/ChatComponent.bundle.js"></script>
          <script>
            document.addEventListener('DOMContentLoaded', function() {
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
                ChatComponent.init('AqQlRmj27cFjCLP3MG2W','#chat-container');
              } else {
                console.error('ChatComponent is not available');
              }
            });
          </script>
      );
};
  export default Chatbot;          
