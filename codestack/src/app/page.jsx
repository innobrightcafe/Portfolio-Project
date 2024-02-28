import StackedCards from "@/components/ui/card/card";
import Footer from "@/components/ui/footer/footer";
import MainNavbar from "@/components/ui/navbar/mainNavbar";
import { Slider } from "@/components/ui/slider/slider";

export default function Home() {
  return (
    <div>
      <MainNavbar />
       <Slider/>
       <h2>Top Stacks</h2>
       <StackedCards />
       <Footer />  
    </div>
  );
}
