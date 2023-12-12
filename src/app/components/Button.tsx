export default function Button(text: string, classTw: string) {
    return (
        <button className={classTw}>
            {text}
        </button>
    )
}