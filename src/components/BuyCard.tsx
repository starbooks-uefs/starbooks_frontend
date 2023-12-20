import DownloadButton from "./DownloadButton";

type CardProps = {
  bookName: string | undefined,
  author: string | undefined,
  currentPrice: number | undefined,
  textBtn: string | undefined,
  functionality: () => void,
  btnText: string
  changeBtnClas: string,
  hrefDown: string | null
}

export default function BuyCard( {hrefDown, changeBtnClas, btnText, functionality, bookName, author, currentPrice, textBtn}: CardProps ) {
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
                  {currentPrice ? (
                    <span className='text-2xl font-semibold line-through'>{(currentPrice + (currentPrice * 0.5)).toFixed(2)}</span>
                  ): null}
                </div>
                <div className='items-center'>
                  <span className='text-3xl font-semibold'>Por R$</span>
                  {currentPrice ? (
                    <span className='text-3xl font-semibold'>{currentPrice.toFixed(2)}</span>
                  ): null}
                </div>
              </div>
              <hr className='my-7 -mx-3 border-t-1 border-t-bg-blue' />
              <DownloadButton hrefDown={hrefDown} btnText={btnText} functionality={functionality} className={changeBtnClas} />
            </div>
  )
}