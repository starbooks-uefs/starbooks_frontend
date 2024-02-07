"use client"

import { ReactNode, useState } from "react"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import SectionIndicator from "./SectionIndicator"
import { FormProvider, useForm } from "react-hook-form"

type formProps = {
    className:string
    sections:Array<Array<ReactNode>>
}

export default function({className,sections}:formProps){
    const [currentSection,setCurrentSection] = useState(0)
    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })
    

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

    return <FormProvider {...methods}>
        <form className={`flex flex-col gap-4 ${className}` } onSubmit={e => e.preventDefault()}
        noValidate>
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
            {currentSection < sections.length - 1 && <PrimaryButton onClick={handleIncremet} text="Próximo"/>}
            {currentSection == sections.length - 1 && <PrimaryButton onClick={onSubmit} text="Finalizar"/>}
        </div> 
    </form>
    </FormProvider>
}
