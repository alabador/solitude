import { unicaOne } from "@/styles/fonts";

export default function Hero() {
  return (
    <section
      className="overflow-hidden 
    background bg-[url('/images/wynncraft.png')] 
    bg-cover bg-no-repeat bg-fixed bg-[center_right_25%] h-[480px]
		flex justify-center items-center"
    >
			<h1 className={`${unicaOne.className} text-6xl text-inherit text-base-100`}>Solitude</h1>
		</section>
  );
}
