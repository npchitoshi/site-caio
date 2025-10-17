import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground"; 
import WhatsappButton from "./components/WhatsappButton"; 
import WavySection from "./components/WavySection";
import MusicGrid from "./components/MusicGrid";

export default function Home() {
  return <>
    <Navbar />
    <main>
      <h1>TESTE</h1>
      <VideoBackground>
          <MusicGrid />
        </VideoBackground>
      <WavySection />
    </main>
    <Footer/>
    {/* <WhatsappButton /> */}
  </>
}