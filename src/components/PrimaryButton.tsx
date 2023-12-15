type buttonProps = {
    text:string
    className?:string | undefined
}

export default function({text,className}:buttonProps){
    return <button className={`w-full bg-blue-500 font-semibold rounded-lg text-white px-4 py-3 ${className??""}`}>{text}</button>
}