
import { useRouter } from "next/navigation";
import BookCover from "./BookCover";
import Link from "next/link";

interface BookDetails{
    img: string | undefined,
    title: string | undefined,
    author: string | undefined,
    currentPrice: number | undefined,
    id:number
    remove:(id:number)=>void
}

export default function({img, title, author: author, currentPrice,  id, remove}:BookDetails){
    const router = useRouter()


    return <div className="grid  grid-cols-3 justify-items-center p-6 items-center">
        <Link href={`/book/${id}`} ><BookCover autor={author} img={img} title={title}  direction="horizontal"/></Link>

        <div>
            <span className="mr-2 ">R$</span>
            <span>{currentPrice}</span>
        </div>
        
        <button onClick={(e)=>{remove(id)}} className="hover:text-red-400">Excluir</button>

    </div>
}