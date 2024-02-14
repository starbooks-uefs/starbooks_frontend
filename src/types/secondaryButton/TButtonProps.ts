import { MouseEventHandler } from "react"

export type TButtonProps = {
    text:string,
    className?:string | undefined,
    onClick?:MouseEventHandler
}