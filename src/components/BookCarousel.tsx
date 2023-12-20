import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

type BookCarouselProps = {
  id: number | undefined,
  img: string | undefined,
  title: string | undefined,
  author: string | undefined,
  currentPrice: number | undefined
}

export default function BookCarousel( {id, img, title, author, currentPrice}: BookCarouselProps ) {
  return (
    <div className='flex flex-col flex-none mt-1 w-40 h-full'>
      {/* Div da imagem */}
      <div className=' w-40 h-52'>
        <Link href={`http://localhost:3000/book/${id}`}>
          <img src={img} alt="Livro" className='w-full h-full rounded'/>
        </Link>
      </div>
      {/* Div do título e do autor */}
      <div className=' my-1 w-full flex flex-col justify-start items-center whitespace-nowrap overflow-hidden'>
        <div className='w-full flex flex-none justify-start'>
          <p className='text-sm font-semibold'>{title}</p>
        </div>
        <div className='w-full flex flex-none justify-start'>
          <p className='text-xs font-light'>{author}</p>
        </div>
      </div>
      {/* Div do preço */}
      <div className=' my-1 w-full flex justify-between items-center'>
        <div className='text-bg-grayT'>
          <span className='text-sm font-semibold line-through'>R$ </span>
          {currentPrice ? (
            <span className='text-sm font-semibold line-through'>{(currentPrice + (currentPrice * 0.5)).toFixed(2)}</span>
          ): null}
        </div>
        <div>
          <span className='text-sm font-semibold'>R$ </span>
          {currentPrice ? (
            <span className='text-sm font-semibold'>{currentPrice.toFixed(2)}</span>
          ): null}
        </div>
      </div>
      {/* Div do botão */}
      <div>
        <PrimaryButton text="+ Adicionar" className="w-full bg-white border border-bg-blue font-bold rounded px-2 py-2 text-sm text-bg-blue" />
      </div>
    </div>
  )
}