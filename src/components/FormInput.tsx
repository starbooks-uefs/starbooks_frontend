type inputProps = {
    label:string,
    placeholder:string | undefined,
    inputType:string,
    id:string
    maxLength?:number | undefined
    
}

export default function({label,placeholder,inputType,id, maxLength}:inputProps){
    return <div className="flex flex-col gap-2">
    <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
    <input className="border-2 rounded-lg p-3 text-sm" type={inputType} name={id} id={id} placeholder={placeholder} maxLength={maxLength} />
    </div>
}