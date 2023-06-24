import { unicaOne, albertSans } from "@/styles/fonts";


export default function SixtyForty({title, text}: 
    {title?:string, text:string}) {
  return (
    <article className="flex flex-col gap-4 justify-center text-left">
      <div className="">
        <h2 className={`${unicaOne.className} text-3xl py-2`}>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  )
}
