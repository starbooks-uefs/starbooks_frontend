import Link from "next/link";
import BookCover from "./BookCover";

interface BookDetails{
    img: string | undefined,
    title: string | undefined,
    author: string | undefined,
    currentPrice: number | undefined,
    deleteLink:string
}

export default function({img, title, author: author, currentPrice,  deleteLink}:BookDetails){
    return <div className="grid  grid-cols-3 justify-items-center p-6 items-center">
        <BookCover autor={author} img={img} title={title}  direction="horizontal"/>

        <div>
            <span className="mr-2 ">R$</span>
            <span>{currentPrice}</span>
        </div>
        
        <Link href={deleteLink} className="hover:text-red-400">Excluir</Link>

    </div>
}