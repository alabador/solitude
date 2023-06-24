import SixtyForty from "@/components/SixtyForty";
import Copy from "@/data/websiteCopy.json";
import Image, { StaticImageData } from "next/image";
import Map from '@/public/images/mapwynn.png'

export default function AboutSection() {
  return (
    <section className="p-12 md:p-24 bg-secondary flex flex-col lg:flex-row items-center gap-12">
      <div className="flex flex-col justify-between">
        <SixtyForty 
        title="What is Solitude?"
        text={Copy.intro}
        />
        <SixtyForty text={Copy.intro2}/>
      </div>
      <Image 
      src={Map}
      alt="Map of Wynncraft"
      />
    </section>
  )
}
