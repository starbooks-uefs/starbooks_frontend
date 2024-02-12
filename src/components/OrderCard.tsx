import BookCarousel from "./BookCarousel";
import BookCover from "./BookCover";

type OrderCardProps = {
  id: number | undefined,
  img: string | undefined,
  title: string | undefined,
  author: string | undefined,
  currentPrice: number | undefined,
  date: string | undefined
}

export default function OrderCard( {id, img, title, author, currentPrice, date}: OrderCardProps ) {
  return (
    <div className="m-10 p-6 w-[36rem] bg-white rounded-lg shadow border border-neutral-600 flex justify-center flex-col text-base font-bold text-neutral-600">
      <div>
        <span className="text-black">Data: </span>
        <span>{date}</span>
      </div>
      <div>
        <span className="text-black">Número do pedido: </span>
        <span>{id}</span>
      </div>
      <div>
        <span className="text-black">Status do pedido: </span>
        <span>Efetuado</span>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="text-black">Item do pedido: </span>
        </div>
        <div>
          <span className="text-black">Valor total: R$ </span>
          <span>{currentPrice}</span>
        </div>
      </div>
      <div className="mt-5">
        <BookCover
          img={img} 
          title={title} 
          autor={author}
        />
      </div>
      
    </div>
  )
}