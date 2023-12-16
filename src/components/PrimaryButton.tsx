type buttonProps = {
    text:string
    className?:string | undefined
}

export default function({text,className}:buttonProps){
    return <button className={`${className??""}`}>{text}</button>
}