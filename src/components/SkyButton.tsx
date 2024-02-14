import { MouseEventHandler, ReactNode } from "react"

type buttonProps = {
    text: string,
    className?: string | undefined,
    onClick?: MouseEventHandler
}

export default function ({ text, className, onClick }: buttonProps) {
    return <button type="button" onClick={onClick} className={`border-sky-700 border-2 font-semibold text-xs rounded-lg text-sky-700 px-1 py-2 hover:bg-sky-700 hover:text-white ${className ?? ""}`}>{text}</button>
}