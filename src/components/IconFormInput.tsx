import { ReactElement, useEffect, useRef, useState } from "react"
import { IconType } from "react-icons"
import { IMaskInput } from "react-imask"

type inputProps = {
    label:string,
    placeholder:string | undefined,
    inputType:string,
    id:string,
    maxLength?:number | undefined,
    icon: ReactElement<IconType>
    mask?:string
}

export default function({label,placeholder,inputType,id, maxLength,icon}:inputProps){
    const inputRef = useRef<HTMLInputElement | undefined>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    inputRef.current?.focus()
    return <div ref={containerRef} className="flex flex-col gap-2">
                <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
                <div className={`flex justify-between px-3 gap-3 border-2 rounded-lg items-center`}>
                    <IMaskInput  className={`py-3 text-sm w-full outline-0`} type={inputType} name={id} id={id} placeholder={placeholder} maxLength={maxLength} />
                    {icon}
                </div>
            </div>
}