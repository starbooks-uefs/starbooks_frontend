import { MouseEventHandler } from "react"

export type TRadioProps = {
    onClick?:MouseEventHandler<HTMLInputElement>
    name:string,
    id:string,
    value:string,
    label:string,
    className?:string
    checked?:boolean
}