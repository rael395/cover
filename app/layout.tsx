import Head from 'next/head';
import "./globals.css";
import { Inter } from "next/font/google";
import Head from 'next/head';
import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - CoverEffect Insurance",
  description: "Insurance Agent for Hollard ",
};

export default function RootLayout({ children }: {children: any}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        {/* Add the external script here */}
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
            
      </Head>
      <body className={`${inter.className} text-body leading-relaxed`}>
        <Navigation />
        {children}
        <Footer />
        
      </body>
    </>
  );
}
