import { unicaOne } from "@/styles/fonts";

export default function Hero() {
  return (
    <section
      className="overflow-hidden 
    bg-[url('/images/wynncraft.png')] 
    bg-cover bg-no-repeat bg-fixed bg-[center_right_25%] bg-blue-950 bg-blend-overlay
		h-[480px] flex justify-center items-center"
    >
			<div className="flex flex-col items-center">
				<h1 className={`${unicaOne.className} text-6xl text-base-100`}>Solitude</h1>
				<h2 className={`${unicaOne.className} text-2xl text-primary`}>“In unity, we find our strength.”</h2>
			</div>
		</section>
  );
}
