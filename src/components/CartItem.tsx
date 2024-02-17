import { useRouter } from "next/navigation";
import BookCover from "./BookCover";
import Link from "next/link";

interface BookDetails {
  img: string | undefined;
  title: string | undefined;
  author: string | undefined;
  currentPrice: number | undefined;
  id: number;
  idReader:number;
  remove: (id: number) => void;
  purchase: (idReader: number, idBook:number) => void;
}

export default function ({
  img,
  title,
  author: author,
  currentPrice,
  id,
  idReader,
  remove,
  purchase,
}: BookDetails) {
  const router = useRouter();

  return (
    <div className="grid  grid-cols-3 justify-items-center p-6 items-center">
      <Link href={`/book/${id}`}>
        <BookCover
          autor={author}
          img={img}
          title={title}
          direction="horizontal"
        />
      </Link>

      <div>
        <span className="mr-2 ">R$</span>
        <span>{currentPrice}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={(e) => {
            remove(id);
          }}
          className="hover:text-red-400"
        >
          Excluir
        </button>
        <button
          onClick={(e) => {
            purchase(idReader,id);
          }}
          className="hover:text-yellow-400"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
