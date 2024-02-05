import { IMaskInput } from "react-imask"

type inputProps = {
    label:string,
    placeholder:string | undefined,
    id:string,
    pattern?:string,
    mask?:string
}

export default function({label,placeholder,id, mask, pattern}:inputProps){
    return <div className="flex flex-col gap-2">
    <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
    <IMaskInput pattern={pattern} mask={mask} name={id} id={id} placeholder={placeholder} className="border-2 rounded-lg p-3 text-sm bg-white"/>
    </div>
}