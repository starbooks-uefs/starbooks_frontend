import { MouseEventHandler, ReactNode } from "react"

type buttonProps = {
    text:string,
    className?:string | undefined,
    onClick?:MouseEventHandler
}

export default function({text,className,onClick}:buttonProps){
    return <button  type="button" onClick={onClick} className={`w-full bg-blue-500 border-2 border-blue-500 font-semibold rounded-lg text-white px-4 py-3 ${className??""}`}>{text}</button>
}