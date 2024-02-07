import { ReactElement, useEffect, useRef, useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
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

export default function({mask,label,placeholder,inputType,id, maxLength,icon}:inputProps){
    const {control } = useFormContext()
    const containerRef = useRef<HTMLDivElement>(null)
    const [isFocused, setIsfocused] = useState(false)

    const handleBlur = ()=>{
        setIsfocused(false)
    }

    const handleFocus = ()=>{
        setIsfocused(true)
    }


    return <div ref={containerRef} className="flex flex-col gap-2">
                <label  htmlFor={id} className="font-semibold text-sm " >{label}</label>
                <div className={`flex justify-between px-3 gap-3 border-2 rounded-lg items-center ${isFocused?"border-black":"border-gray-300"}`}>
                    <Controller control={control} name={id} render={({field}) => <IMaskInput onAccept={(currentValue)=>field.onChange(currentValue)} unmask={true} blur={handleBlur} onFocus={handleFocus} mask={mask}  className={`py-3 text-sm w-full outline-0 `} type={inputType} id={id} placeholder={placeholder} maxLength={maxLength}/>}/>
                    
                    <div className="p-1">{icon}</div>
                </div>
            </div>
}