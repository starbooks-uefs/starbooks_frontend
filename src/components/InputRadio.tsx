import { LegacyRef, MouseEventHandler, forwardRef } from "react"

type radioProps = {
    onClick?:MouseEventHandler<HTMLInputElement>
    name:string,
    id:string,
    value:string,
    label:string,
    className?:string
    checked?:boolean
}

export type ref = HTMLInputElement

export const InputRadio = forwardRef<ref,radioProps>((props,ref) => (
    <div className={`flex gap-4 p-3 border-2 rounded-lg ${props.className}`}>
    <input checked={props.checked} onClick={props.onClick} ref={ref} type="radio" name={props.name} id={props.id} value={props.value}/>
    <label htmlFor={props.id}>{props.label}</label></div>
))
