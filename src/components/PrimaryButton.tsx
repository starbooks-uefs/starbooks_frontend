import Link from "next/link"
import { MouseEventHandler, ReactNode } from "react"
import { TButtonProps } from "@/types/primaryButton/TButtonProps"

export default function({type="button", text, className, onClick, href}:TButtonProps){
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