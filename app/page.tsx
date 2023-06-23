import Hero from "@/app/components/Hero";
import WideContentBlock from "@/app/components/WideContentBlock";
import Copy from "@/data/websiteCopy.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WideContentBlock text={Copy.banner} title={"Welcome to the Guild!"}/>
    </main>
  );
}
