type inputProps = {
    label: string,
    placeholder: string | undefined,
    inputType: string,
    id: string,
    classNameInput?: string
    onValueChange?(value: any): any;
    maxLength?: number | undefined,
    disabled?: boolean

}

export default function ({ label, placeholder, inputType, id, classNameInput, onValueChange, maxLength, disabled }: inputProps) {
    return <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
        <input className={`border-2 rounded-lg py-4 px-3 text-sm ${classNameInput}`} type={inputType} name={id} id={id} placeholder={placeholder} onChange={onValueChange} maxLength={maxLength} disabled={disabled} />
    </div>
}