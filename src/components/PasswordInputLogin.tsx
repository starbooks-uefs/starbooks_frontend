import Link from "next/link";
import { useFormContext } from "react-hook-form";

type inputProps = {
    recoveryLink:string,
}

export default function({recoveryLink}:inputProps){
    const {register} = useFormContext()
    return <div className="flex flex-col gap-2">
    <div className="flex justify-between items-center">
        <label htmlFor="password" className="font-semibold text-sm" >Senha</label>
        <Link href={recoveryLink} className="text-blue-500 font-medium text-xs">Esqueceu sua senha?</Link>
    </div>
    <input className="border-2 rounded-lg p-3 text-sm" type="password" id="password" placeholder="Sua senha" {...register("password")}/>
</div>
}