import Hero from "@/components/Hero";
import WideContentBlock from "@/components/WideContentBlock";
import Copy from "@/data/websiteCopy.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WideContentBlock text={Copy.banner}/>
    </main>
  );
}
