import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/ui/navbar/mainNavbar";

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
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
