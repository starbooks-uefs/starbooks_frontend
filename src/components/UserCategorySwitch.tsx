"use client"
import { useState } from "react";
import { FiBookOpen, FiEdit3 } from "react-icons/fi";

const inactiveStyle = "border-gray-300 text-gray-500" 
const activeStyle = "border-blue-500 text-blue-500 font-medium"


export default function(){
    const [isReader,setIsReader] = useState(true)
    const handle = () => setIsReader(!isReader)

    return <div className="flex justify-stretch gap-6">
    <button onClick={handle} type="button" className={`flex rounded-lg gap-4 py-3 px-6 border-2 w-full justify-center items-center text-sm  ${isReader?activeStyle:inactiveStyle}`}>
        <FiBookOpen/>
        <span >Leitor</span>
    </button>

    <button onClick={handle} type="button" className={`flex rounded-lg gap-4 py-3 px-6 border-2 w-full justify-center items-center text-sm  ${!isReader?activeStyle:inactiveStyle}`}>
        <FiEdit3/>
        <span>Produtor</span>
    </button>
</div>
}