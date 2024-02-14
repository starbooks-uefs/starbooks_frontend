import Link from "next/link"
import { MouseEventHandler, ReactNode } from "react"

type buttonProps = {
    text:string,
    className?:string | undefined,
    onClick?:MouseEventHandler,
    type?:"button" | "submit" | "reset" | undefined
    href: string
}

export default function({type="button", text, className, onClick, href}:buttonProps){
    return<>
        { href ? (
            <Link href={href}>
                <button type={type} onClick={onClick} className={className}>
                    {text}
                </button>
            </Link>
        ): <button  type={type} onClick={onClick} className={className}>{text}</button>
        }
    </>
}