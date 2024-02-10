"use client"
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiBookOpen, FiEdit3 } from "react-icons/fi";

const inactiveStyle = "border-gray-300 text-gray-500" 
const activeStyle = "border-blue-500 text-blue-500 font-medium"


export default function(){
    const {setValue} = useFormContext()
    const [isReader,setIsReader] = useState(()=>{
        setValue("user_type","reader")
        return true
    })

    const handleCategory = (value:boolean) => {
        setIsReader(value)
        setValue("user_type", value? "reader":"author")
    }

    return <div className="flex justify-stretch gap-6">
    <button onClick={()=>{handleCategory(true)}} type="button" className={`flex rounded-lg gap-4 p-3 border-2 w-full justify-center items-center text-sm  ${isReader?activeStyle:inactiveStyle}`} > 
        <FiBookOpen/>
        <span >Leitor</span>
    </button>

    <button onClick={()=>{handleCategory(false)}} type="button" className={`flex rounded-lg gap-4 p-3 border-2 w-full justify-center items-center text-sm  ${!isReader?activeStyle:inactiveStyle}`}>
        <FiEdit3/>
        <span>Produtor</span>
    </button>
</div>
}