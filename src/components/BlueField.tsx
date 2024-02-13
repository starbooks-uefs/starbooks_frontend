
import { LuLineChart } from "react-icons/lu";

type elementsField = {
    title: string,
    value: string,
    variation:string
}

export default function ({ title, value, variation}: elementsField) {
    return (
        <div className="flex p-6 bg-blue-400 text-white rounded-lg h-24 w-54">
            <div className="">
                <h1 className="text-sm font-light">{title}</h1>
                <h2 className="text-2xl font-semi mt-2">{value}</h2>
                
            </div>
            <div className="text-sm font-light flex items-center mr-2 ml-auto mt-6">
                {variation}
                <LuLineChart className="w-3.5 ml-1"/>
            </div>
        </div>)
}
