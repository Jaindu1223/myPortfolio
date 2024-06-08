import Image from "next/image";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/Welcome";
import HomeStart from "./components/Home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      <Navbar/>
      <HeroSection/>
      {/* <Services/> */}
      <HomeStart/>
      </div>
      
);
}
