import { useRef, useState } from "react"
import {InputRadio} from "./InputRadio"
import { useFormContext } from "react-hook-form"

export default function(){
    const [currentGender,setCurrentGender] = useState<string | undefined>("male")
    const {register,setValue } = useFormContext()
    const inputOtherGender = useRef<HTMLInputElement>(null)
    const handleGender = (value:string)=>{
        setCurrentGender(value)
        setValue("gender",value != "other"? value : inputOtherGender.current?.value)
    }

    return <div>
        <span className="font-semibold">Gênero</span>
        <div>
            <div className="flex justify-between mt-2 text-sm">
                <InputRadio key={"male"} checked={currentGender == "male"} className={currentGender == "male"? "border-gray-400":"border-gray-300"} name="gender" label="Masculino" onClick={()=> handleGender("male") } id="male" value="male" />
                <InputRadio key={"female"} checked={currentGender == "female"} className={currentGender == "female"? "border-gray-400":"border-gray-300"} name="gender" label="Feminino" onClick={()=> handleGender("female")}  id="female" value="female"/>
                <InputRadio key={"other"} checked={currentGender == "other"} className={currentGender == "other"? "border-gray-400":"border-gray-300"} name="gender" label="Outro" onClick={()=> handleGender("other")} id="other" value="other" />
            </div>
            <input className={`p-3 mt-4 border-2 rounded-lg text-sm w-full ${currentGender == "other"? "inline-block":"hidden"}`} type="text" id="other-input" placeholder="Seu gênero" {...register("gender")}/>
        </div>
            
    </div>
}