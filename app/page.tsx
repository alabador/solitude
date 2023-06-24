import Hero from "@/app/components/Hero";
import WideContentBlock from "@/app/components/WideContentBlock";
import Copy from "@/data/websiteCopy.json";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WideContentBlock text={Copy.banner} title={"Welcome to the Guild!"}/>
      <AboutSection />
    </main>
  );
}
