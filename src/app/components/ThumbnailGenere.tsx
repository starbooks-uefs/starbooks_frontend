type ThumbnailGenereProps = {
    img: string
}

export const ThumbnailGenere = ({ img }: ThumbnailGenereProps) => {
    return (
        <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative overflow-hidden" >
            <div className="flex flex-row gap-2.5 items-end justify-center shrink-0 h-[175px] relative shadow-md">
                <div className="flex flex-row gap-2.5 items-end justify-center shrink-0 w-40 h-40 relative" >
                    <div className="rounded-[100px] flex flex-row gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden shadow-inner bg-black bg-opacity-90 h-130" >
                        <img className="rounded self-stretch flex-1 relative" src={img} alt="Thumbnail"/>
                    </div>
                    <div className="text-[#ffffff] text-center font-['Roboto-Bold',_sans-serif] text-[19.200000762939453px] font-bold absolute left-[51.9px] top-[68px]" >
                        Drama </div>
                </div>
            </div>
        </div>
    )
}

export default ThumbnailGenere;