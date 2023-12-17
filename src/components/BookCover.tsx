import PrimaryButton from "./PrimaryButton"

type bookCoverProps = {
    img: string,
    title: string,
    autor: string,
}

export default function ({ img, title, autor }: bookCoverProps) {
    return (
        <div className=" w-[120px] h-[205px] flex-col justify-center gap-1 m-3 ">
            <img src={img} className="w-[120px] h-[165px] rounded  hover:cursor-pointer" alt="capa do livro" />
            <div className="p-0.5 text-center text-neutral-800 text-sm font-semibold whitespace-nowrap overflow-x-clip"> {title}</div>
            <div className="p-0.5 text-center text-neutral-500 text-xs font-normal whitespace-nowrap overflow-x-clip"> {autor}</div>
            <PrimaryButton text="Download" className="hover:cursor-pointer text-center text-white text-sm font-normal w-[120px] h-[25px]px-2 py-1 bg-blue-400 rounded-md justify-center items-center gap-1"/>
        </div>)
}
