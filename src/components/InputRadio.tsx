import { LegacyRef, MouseEventHandler, forwardRef } from "react"
import { TRadioProps } from "@/types/inputRadio/TRadioProps"

export type ref = HTMLInputElement

export const InputRadio = forwardRef<ref,TRadioProps>((props,ref) => (
    <div className={`flex gap-4 p-3 border-2 rounded-lg ${props.className}`}>
    <input checked={props.checked} onClick={props.onClick} ref={ref} type="radio" name={props.name} id={props.id} value={props.value}/>
    <label htmlFor={props.id}>{props.label}</label></div>
))
