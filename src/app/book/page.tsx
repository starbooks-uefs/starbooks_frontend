import Link from "next/link";

export default function Book () {
  return (
    <div className='flex w-full h-screen bg-red-500 justify-center'>
      <div className='flex w-4/5 mx-30 bg-blue-100 flex-col'>
        {/* Link de voltar: */}
        <div className='px-2 py-8'>
          <Link href="/">Voltar</Link>
        </div>
        {/* Div que engloba a imagem e o card */}
        <div className='flex h-4/5 bg-green-300 justify-between'>
          {/* Imagem do livro */}
          <div className='flex w-1/2 h-full bg-red-600 justify-center items-center'>
            <div className='w-3/4 h-5/6 bg-slate-500'>
              <img src="#" alt=""/>
            </div>
          </div>
          {/* Card */}
          <div className='flex w-1/2 h-full bg-violet-400 justify-end'>
            <div className='w-5/6 h-2/4 bg-slate-500'>

            </div>
          </div>
        </div>
        {/* Sinopse */}
        <div className='h-auto my-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum quam commodi impedit sed facere dolor voluptatibus saepe aliquam, officiis odit animi soluta quaerat qui vero, delectus ipsum temporibus omnis.
        </div>
        {/* Especificação */}
        <div>
    
        </div>
      </div>
    </div>
  )
}