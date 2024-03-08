import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"codeStack",
    template:"%s |codeStack"
  },
  description: "For tech people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
          <div className="container"> 
            {children}
            <Footer />
          </div> 
      </body>
    </html>
  );
}
