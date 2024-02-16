import { ReactNode } from "react"
import { FieldValues } from "react-hook-form"

export type TFormProps = {
    className:string
    sections:Array<Array<ReactNode>>
    onFetch:(data:FieldValues) => void
}