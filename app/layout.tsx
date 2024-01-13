import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - CoverEffect Insurance",
  description: "Insurance Agent for Hollard ",
};

export default function RootLayout({children }: {children: any}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-body leading-relaxed`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
