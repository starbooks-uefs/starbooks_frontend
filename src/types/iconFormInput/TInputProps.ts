import { ReactElement } from "react"
import { IconType } from "react-icons"

export type TInputProps = {
    label:string,
    placeholder:string | undefined,
    inputType:string,
    id:string,
    maxLength?:number | undefined,
    icon: ReactElement<IconType>
    mask?:string
}