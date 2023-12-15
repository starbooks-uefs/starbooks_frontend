type inputProps = {
    label:string,
    placeholder:string,
    inputType:string,
    id:string,
    className?:string
}

export default function({label,placeholder,inputType,id, className}:inputProps){
    return <div className={`"flex flex-col gap-2" ${className}`}>
    <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
    <input className="border-2 rounded-lg py-4 px-3 text-sm" type={inputType} name={id} id={id} placeholder={placeholder} />
    </div>
}