import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
 
 
export default function RootLayout({ children }) {
  return (
    <div className="container">
        <Navbar />
        <div>{children}</div> 
      </div>
    );
  };