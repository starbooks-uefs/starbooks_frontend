import { MouseEventHandler, ReactNode } from "react"

type buttonProps = {
    text:string,
    className?:string | undefined,
    onClick?:MouseEventHandler
}

export default function({text,className,onClick}:buttonProps){
    return <button type="button" onClick={onClick} className={`w-full border-blue-500 border-2 font-semibold rounded-lg text-blue-500 px-4 py-3 ${className??""}`}>{text}</button>
}