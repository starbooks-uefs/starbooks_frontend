import { TBookCoverProps } from "@/types/bookCover/TBookCoverProps"

export default function BookCover({ img, title, autor, direction="vertical"}: TBookCoverProps) {
    return (
        <div className={`m-2  ${direction == "vertical"?'flex-col justify-center items-center w-[117px] h-[164px]':'flex-row items-start justify-center '}  gap-0.5 inline-flex hover:cursor-pointer`}>
            <img src={img} className={`${direction == "vertical"?'w-[117px] h-[164px]':'h-[85px] w-[65px]'} rounded`} alt="" />
            <div>
                <div className={` ${direction == "vertical"?'text-center w-[110px] my-2 text-sm font-semibold':'text-left ml-3 w-[200px] font-medium'} text-neutral-800  `}> {title}</div>
                <div className= {`${direction == "vertical"?'text-center w-[110px] text-xs font-normal':'text-left ml-3 w-[150px] text-sm'} text-neutral-500 `}> {autor}</div>
            </div>
        </div>)
}