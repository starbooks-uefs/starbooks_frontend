import { useRef, useState } from "react"
import {InputRadio} from "./InputRadio"

export default function(){
    const [currentGender,setCurrentGender] = useState<string | undefined>("masculine")
    const inputMasculine = useRef<HTMLInputElement | null>(null)
    const inputFeminine = useRef<HTMLInputElement | null>(null)
    const inputOther = useRef<HTMLInputElement | null>(null)
    
    const handleMasculineGender = ()=>{
        setCurrentGender(inputMasculine.current?.value)
        console.log(currentGender)
    }

    const handleFeminineGender = ()=>{
        setCurrentGender(inputFeminine.current?.value)
        console.log(currentGender)
    }

    const handleOtherGender = ()=>{
        setCurrentGender(inputOther.current?.value)
        console.log(currentGender)
    }
    
    return <div>
        <span className="font-semibold">Gênero</span>
        <div>
            <div className="flex justify-between mt-2 text-sm">
                <InputRadio checked={currentGender == "masculine"} className={currentGender == "masculine"? "border-gray-400":"border-gray-300"} label="Masculino" onClick={handleMasculineGender} ref={inputMasculine} name="gender" id="masculine" value="masculine"/>
                <InputRadio checked={currentGender == "feminine"} className={currentGender == "feminine"? "border-gray-400":"border-gray-300"} label="Feminino" onClick={handleFeminineGender} ref={inputFeminine} name="gender" id="feminine" value="feminine"/>
                <InputRadio checked={currentGender == "other"} className={currentGender == "other"? "border-gray-400":"border-gray-300"} label="Outro" onClick={handleOtherGender} ref={inputOther} name="gender" id="other" value="other"/>
            </div>
            <input className={`p-3 mt-4 border-2 rounded-lg text-sm w-full ${currentGender == "other"? "inline-block":"hidden"}`} type="text" name="other-input" id="other-input" placeholder="Seu gênero"/>
        </div>
            
    </div>
}