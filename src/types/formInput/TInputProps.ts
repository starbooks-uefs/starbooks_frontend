export type TInputProps = {
    label: string,
    placeholder: string | undefined,
    inputType: string,
    id: string,
    classNameInput?: string
    onValueChange?(value: any): any
    maxLength?: number | undefined,
    disabled?: boolean

}