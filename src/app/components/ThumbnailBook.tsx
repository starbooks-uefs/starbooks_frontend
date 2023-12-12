export default function TumbnailBook(image: string, classTw: string, alternative: string) {
    return (
        <div className={classTw}>
            <img src={image} alt={alternative} />
        </div>
    )
}