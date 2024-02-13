import { Controller, useFormContext } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { TInputProps } from "@/types/maskFormInput/TInputProps"

export default function({classNameInput,label,placeholder,id, mask}:TInputProps){
    const { control } = useFormContext()
    return <div className="flex flex-col gap-2">
    <label htmlFor={id} className={`font-semibold text-sm ${classNameInput}`} >{label}</label>
    <Controller name={id} control={control} render={({field}) => <IMaskInput onAccept={(currentValue)=> field.onChange(currentValue)}  unmask={true}  mask={mask} id={id} placeholder={placeholder} className="border-2 rounded-lg p-3 text-sm bg-white" {...field} />}/>
    </div>
}