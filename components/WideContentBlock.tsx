import { unicaOne, albertSans } from "@/styles/fonts";


export default function WideContentBlock({text, title, style}:
  {text:string, title:string, style?:string}) {
  return (
    <section className={`${style ? style : ""} flex flex-col gap-4 justify-center items-center text-center p-12 md:p-24`}>
        <h2 className={`${unicaOne.className} text-3xl`}>{title}</h2>
        <h3 className={`${albertSans.className} text-xl font-light`}>{text}</h3>
    </section>
  )
}
