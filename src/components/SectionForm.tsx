"use client"

import { ReactNode, useState } from "react"
import FormInput from "./FormInput"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import SectionIndicator from "./SectionIndicator"

type inputProps = {
    label:string,
    placeholder?:string | undefined,
    type:string,
    id:string
    maxLength?:number | undefined
}

type formProps = {
    className:string
    sections:Array<Array<ReactNode>>
}

export default function({className,sections}:formProps){
    const [currentSection,setCurrentSection] = useState(0)

    const handleIncremet = ()=> {
        if(currentSection < sections.length){
            setCurrentSection(currentSection + 1)
            console.log(currentSection)
        }
    }

    const handleDecrement = ()=>{
        if(currentSection > 0){
            setCurrentSection(currentSection - 1)
            console.log(currentSection)
        }
    }

    const handleFinish = ()=>{
        console.log("Cadastro finalizado")
    }

    return <form className={`flex flex-col gap-4 ${className}` } >
        <div className="flex gap-4 justify-center">
                        {
                            sections.map((section,index) => 
                                {
                                    return index < currentSection && <SectionIndicator index={index+1} key={index} status={"completed"}/> || index == currentSection && <SectionIndicator index={index+1} key={index} status={"current"}/> || index > currentSection  &&<SectionIndicator index={index+1} key={index} status={"next"}/>
                                }
                            )
                        }
                    
         </div>
        {sections[sections[currentSection] != undefined? currentSection: 0].map((element, index) => {
                return element
            })}
        <div className="flex gap-4">
            {currentSection > 0 && <SecondaryButton onClick={handleDecrement} text="Voltar"/>}
            <PrimaryButton onClick={currentSection != sections.length - 1? handleIncremet : handleFinish} text={currentSection != sections.length - 1 ? "Próximo" : "Finalizar"}/>
        </div> 
    </form>
}
