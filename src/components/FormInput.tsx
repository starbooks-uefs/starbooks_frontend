import { useFormContext } from "react-hook-form";

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
    const { register } = useFormContext()

    return <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
        <input change={onValueChange} className={`border-2 rounded-lg p-3 text-sm bg-white ${classNameInput}`} type={inputType} id={id} placeholder={placeholder} maxLength={maxLength} disabled={disabled} {...register(id)}/>
    </div>
}