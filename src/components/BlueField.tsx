
type TElementsField = {
    title: string,
    value: string,
}

export default function ({ title, value}: TElementsField) {
    return (
        <div className="w-[100%] p-2 flex flex-col bg-blue-400 text-white rounded-lg items-center justify-center">
            <label className="text-sm">{title}</label>
            <h3 className="text-sm">{value}</h3>
        </div>)
}
