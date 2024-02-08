import { Controller, useFormContext } from "react-hook-form"
import { IMaskInput } from "react-imask"

type inputProps = {
    label:string,
    placeholder:string | undefined,
    id:string,
    mask?:string
    classNameInput?:string | undefined
}

export default function({classNameInput,label,placeholder,id, mask}:inputProps){
    const { control } = useFormContext()
    return <div className="flex flex-col gap-2">
    <label htmlFor={id} className={`font-semibold text-sm ${classNameInput}`} >{label}</label>
    <Controller name={id} control={control} render={({field}) => <IMaskInput onAccept={(currentValue)=> field.onChange(currentValue)}  unmask={true}  mask={mask} id={id} placeholder={placeholder} className="border-2 rounded-lg p-3 text-sm bg-white" {...field} />}/>
    </div>
}