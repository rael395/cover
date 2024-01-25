import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer";
import { JSX as _JSX } from 'react/jsx-runtime';

import Script from 'next/script';
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - CoverEffect Insurance",
  description: "Insurance Agent for Hollard ",
};

export default function RootLayout({ children }: {children: any}) {
  return (
    <>
     <html lang="eng">
     <Head>
      <meta 
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

        
      </Head>
      
        <body className={`${inter.className} text-body leading-relaxed`}>
          <Navigation />
          {children}
          <Footer />

          <Script
                defer={true}
                strategy="beforeInteractive"
                src="https://openai-widget.web.app/ChatComponent.bundle.js"
              />
          <Script strategy="afterInteractive">
                {` // Check if the chat container exists
                    var chatContainer = document.getElementById('chat-container');
                    // If the chat container doesn't exist, create it
                    if (!chatContainer) {
                      chatContainer = document.createElement('div');
                      chatContainer.id = 'chat-container';
                      document.body.appendChild(chatContainer); // Append to the body or another specific element
                    }
                    // Initialize the Chat component
                    if (window.ChatComponent) {
                      ChatComponent.init('AqQlRmj27cFjCLP3MG2W','#chat-container');
                    } else {
                      console.error('ChatComponent is not available');
                    }`}
            </Script>
            
        </body>
      </html>
      
    </>
  );
}
