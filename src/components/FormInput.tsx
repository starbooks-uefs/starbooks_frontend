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
    const accountTypeField = register(id)
    return <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
        <input className={`border-2 rounded-lg p-3 text-sm bg-white ${classNameInput}`}
        type={inputType}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={
            (e) => {
                accountTypeField.onChange(e);
                onValueChange!(e);
            }
        }
        />
    </div>
}