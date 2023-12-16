import PrimaryButton from "@/components/PrimaryButton";
import Specification from "@/components/Specification";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Book () {
  return (
    <div className='flex w-full h-full bg-white justify-center'>
      <div className='flex w-4/5 mx-30 flex-col'>
        {/* Link de voltar: */}
        <div className='pt-7 pb-7'>
          <Link className='flex items-center' href="/">
            <IoIosArrowBack className=' text-bg-blue' />
            <span className='font-medium'>Voltar</span>
          </Link>
        </div>
        {/* Div que engloba a imagem e o card */}
        <div className='flex h-cardSpacing justify-between'>
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
        <div className='my-12 text-justify'>
          <h2 className='text-2xl font-medium underline'>Sinopse</h2>
          <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum quam commodi impedit sed facere dolor voluptatibus saepe aliquam, officiis odit animi soluta quaerat qui vero, delectus ipsum temporibus omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis perferendis nam voluptas dolore totam adipisci est distinctio, obcaecati id. Reprehenderit repudiandae enim est ducimus magnam repellat ab voluptatum molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus pariatur rem, maiores, suscipit molestias voluptatem laboriosam tempore commodi quam laudantium aliquam amet deserunt sed delectus adipisci impedit sequi ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat libero unde excepturi. Distinctio facilis eligendi dignissimos placeat impedit vero culpa sapiente quisquam quas, labore minus dolorem repudiandae maxime praesentium dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum voluptatum. Nemo repellendus veniam, inventore sed corporis repudiandae ad minima quae tenetur maiores, nam nisi, quasi aliquid unde fugiat nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus nam commodi placeat officia maiores impedit itaque unde dicta soluta? Optio voluptatem cumque aliquid quis excepturi nostrum impedit deleniti sunt!</p>
        </div>
        {/* Especificação */}
        <div>
          <div>
            <h2 className='text-2xl mb-8 font-medium underline'>Especificações</h2>
          </div>
          <div className='flex gap-8'>
            <Specification type="author" author="aaaa" pagesNumber={10} category="horror" publishCompany="saraiva" date="12/12/20" />
            <Specification type="pages" author="aaaa" pagesNumber={10} category="horror" publishCompany="saraiva" date="12/12/20" />
            <Specification type="category" author="aaaa" pagesNumber={10} category="horror" publishCompany="saraiva" date="12/12/20" />
            <Specification type="publisher" author="aaaa" pagesNumber={10} category="horror" publishCompany="saraiva" date="12/12/20" />
            <Specification type="date" author="aaaa" pagesNumber={10} category="horror" publishCompany="saraiva" date="12/12/20" />
          </div>
        </div>
      </div>
    </div>
  )
}