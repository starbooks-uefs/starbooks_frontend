import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Book () {
  return (
    <div className='flex w-full h-screen bg-white justify-center'>
      <div className='flex w-4/5 mx-30 flex-col'>
        {/* Link de voltar: */}
        <div className='px-2 pt-7 pb-7'>
          <Link className='flex items-center' href="/">
            <IoIosArrowBack />
            <span className='font-medium'>Voltar</span>
          </Link>
        </div>
        {/* Div que engloba a imagem e o card */}
        <div className='flex h-4/5 justify-between'>
          {/* Imagem do livro */}
          <div className='flex w-1/2 h-full bg-bg-grayI justify-center items-center'>
            <div className='w-8/12 h-5/6 bg-white'>
              <img src="#" alt=""/>
            </div>
          </div>
          {/* Área do Card */}
          <div className='flex w-1/2 h-full justify-end'>
            {/* Card */}
            <div className='w-5/6 h-3/5 p-8 mr-8 bg-white rounded-xl shadow-cardBook border'>
              <div>
                <h2 className='text-xl font-medium'>Nome do livro</h2>
              </div>
              <div className='my-5'>
                <span className='text-sm font-bold'>Autor:</span>
                <span className='text-sm font-medium mx-1'>Nome do autor</span>
              </div>
              <hr className='my-7 -mx-3 border-t-1 border-t-bg-blue' />
              <div className=' px-5 flex justify-between'>
                <div className='text-bg-grayT'>
                  <span className='text-2xl font-semibold line-through'>De R$ </span>
                  <span className='text-2xl font-semibold line-through'>Valor</span>
                </div>
                <div className='items-center'>
                  <span className='text-3xl font-semibold'>Por R$</span>
                  <span className='text-3xl font-semibold'>Valor</span>
                </div>
              </div>
              <hr className='my-7 -mx-3 border-t-1 border-t-bg-blue' />
              <PrimaryButton className="w-full bg-primary-color font-semibold rounded-lg text-white px-4 py-3" text="Adicionar ao carrinho" />
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