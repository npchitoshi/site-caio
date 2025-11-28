import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground"; 
import WavySection from "./components/WavySection";
import MusicGrid from "./components/MusicGrid";
import VideosSection from "./components/VideosSection";

export default function Home() {
  return <>
    <Navbar />
    <main>
      <h1>TESTE</h1>
      <VideoBackground>
          <MusicGrid />
        </VideoBackground>
      <WavySection />
      <VideosSection />
    </main>
    <Footer/>
    {/* <WhatsappButton /> */}
  </>
}