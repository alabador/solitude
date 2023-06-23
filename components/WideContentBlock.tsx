import { unicaOne, albertSans } from "@/styles/fonts";


export default function WideContentBlock({text}:{text:string}) {
  return (
    <section className="flex flex-col gap-4 justify-center items-center text-center p-8">
        <h2 className={`${unicaOne.className} text-2xl`}>Welcome to the Guild!</h2>
        <h3 className={`${albertSans.className} text-xl font-light`}>{text}</h3>
    </section>
  )
}
