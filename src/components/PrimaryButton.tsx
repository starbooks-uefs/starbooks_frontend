type buttonProps = {
    text:string
    className?:string | undefined
    functionality?: () => void 
}

export default function({functionality, text,className}:buttonProps){
    return <button onClick={functionality} className={`${className??""}`}>{text}</button>
}