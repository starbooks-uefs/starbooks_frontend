
type ProfileInfos = {
    title: string;
    description:string;
}

export default function ProfileProps({title, description}: ProfileInfos){
    return (
        <div className="font-semibold flex text-sm flex-col">
            <label>{title}</label>
            <label className=" text-gray-400">{description}</label>
        </div>
    )
}