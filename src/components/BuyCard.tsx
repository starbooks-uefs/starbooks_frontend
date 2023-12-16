import PrimaryButton from "./PrimaryButton";

type CardProps = {
  bookName: string,
  author: string,
  previousPrice: number,
  currentPrice: number,
  textBtn: string
}

export default function BuyCard( {bookName, author, previousPrice, currentPrice, textBtn}: CardProps ) {
  return (
    <div className='w-5/6 h-3/5 p-8 mr-8 bg-white rounded-xl shadow-cardBook border'>
              <div>
                <h2 className='text-xl font-medium'>{bookName}</h2>
              </div>
              <div className='my-5'>
                <span className='text-sm font-bold'>Autor:</span>
                <span className='text-sm font-medium mx-1'>{author}</span>
              </div>
              <hr className='my-7 -mx-3 border-t-1 border-t-bg-blue' />
              <div className=' px-5 flex justify-between'>
                <div className='text-bg-grayT'>
                  <span className='text-2xl font-semibold line-through'>De R$ </span>
                  <span className='text-2xl font-semibold line-through'>{previousPrice.toFixed(2)}</span>
                </div>
                <div className='items-center'>
                  <span className='text-3xl font-semibold'>Por R$</span>
                  <span className='text-3xl font-semibold'>{currentPrice.toFixed(2)}</span>
                </div>
              </div>
              <hr className='my-7 -mx-3 border-t-1 border-t-bg-blue' />
              <PrimaryButton className="w-full bg-primary-color font-semibold rounded-lg text-white px-4 py-3" text={textBtn} />
            </div>
  )
}