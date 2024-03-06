import Footer from "@/components/footer/Footer"; 
import AdminNavbar from "@/components/navbar/AdminNavbar";
import "@/app/globals.css";
 
 
export default function RootLayout({ children }) {
  return (
    <div className="container">
        <AdminNavbar />
        <div>{children}</div> 
      </div>
    );
  };