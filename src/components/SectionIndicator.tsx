type indicatorProps = {
    status:statusName
    index:number
}

type statusName = "current" | "completed" | "next"

const statusStyle = {
    current:"text-white border-blue-500 bg-blue-500",
    completed:"text-blue-500 border-blue-500 bg-white",
    next:"text-gray-300 border-gray-300 bg-white"
}

export default function({status,index}:indicatorProps){
    return <div className={`flex justify-center items-center border-2 w-5 h-5 rounded-full text-xs font-semibold ${statusStyle[status]}`}><span>{index}</span></div>
}