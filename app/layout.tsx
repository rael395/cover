import Head from 'next/head';
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer";
import Chatbot from "../components/ui/Chatbot";

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
      </Head>
      <body className={`${inter.className} text-body leading-relaxed`}>
        <Navigation />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </>
  );
}
