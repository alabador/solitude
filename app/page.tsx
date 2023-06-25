import Hero from "@/app/components/Hero";
import WideContentBlock from "@/components/WideContentBlock";
import Copy from "@/data/websiteCopy.json";
import AboutSection from "./components/AboutSection";
import ProfessionSection from "./components/ProfessionSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WideContentBlock text={Copy.banner} title={"Welcome to the Guild!"}/>
      <AboutSection />
      <WideContentBlock text={Copy.professionTypes} title={"Professions"}/>
      <ProfessionSection />
    </main>
  );
}
