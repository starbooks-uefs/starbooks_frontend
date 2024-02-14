type bookCoverProps = {
    img: string,
    title: string,
    autor: string,
}

export default function ({ img, title, autor }: bookCoverProps) {
    return (
        <div className="m-2 w-[117px] h-[205px] flex-col justify-center items-center gap-0.5 inline-flex hover:cursor-pointer">
            <img src={img} className="w-[117px] h-[164px] rounded" alt="" />
            <div className="w-[110px] text-center text-neutral-800 text-sm font-semibold"> {title}</div>
            <div className="text-center text-neutral-500 text-xs font-normal"> {autor}</div>
        </div>)
}