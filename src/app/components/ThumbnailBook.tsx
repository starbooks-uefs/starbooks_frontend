type ThumbnailBookProps = {
    img: string;
}

const ThumbnailBook = ({ img }: ThumbnailBookProps) => {
    return (
        <div className="w-142 h-198">
            <img src={img} alt="Thumbnail" className="rounded self-stretch flex-1 relative"/>
        </div>
    )
}

export default ThumbnailBook;