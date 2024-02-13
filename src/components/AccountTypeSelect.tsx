import { useFormContext } from "react-hook-form"
import { TInputProps } from "@/types/accountTypeSelect/TInputProps"

export default function({label,id}: TInputProps){
    const {register} = useFormContext()
    return <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-semibold text-sm" >{label}</label>
        <select className="border-2 rounded-lg p-3 text-sm bg-white" id={id} {...register(id)}>
            <option value="corrente">Corrente</option>
            <option value="poupanca">Poupança</option>
        </select>
    </div>
}