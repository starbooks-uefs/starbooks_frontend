import { MouseEventHandler, ReactNode } from "react"

type buttonProps = {
    text: string,
    className?: string | undefined,
    onClick?: MouseEventHandler
}

export default function ({ text, className, onClick }: buttonProps) {
    return <button type="button" onClick={onClick} className={`border-sky-400 border-2 font-semibold text-xs rounded-lg text-sky-400 px-1 py-2 hover:bg-sky-400 hover:text-white ${className ?? ""}`}>{text}</button>
}