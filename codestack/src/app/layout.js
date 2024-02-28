import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "codeStack",
    template: "%s | Dashboard",
  },
  description: "Make free public posts on the codeStak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}> 
        {children}  
      </body>
    </html>
  );
}
