"use client"
import Specification from "@/components/Specification";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ExploreBanner from "@/components/ExploreBanner";
import BuyCard from "@/components/BuyCard";
import { useEffect, useState } from "react";

type Book = {
  cover_url: string,
  date: string,
  edition: number,
  gender: string,
  id: number,
  id_producer: number,
  language: string,
  name: string,
  pages_number: number,
  pdf_url: string,
  price: number,
  publisher: string,
  rating: number,
  submission_date: string,
  submission_reason: string,
  submission_status: boolean,
  synopsis: string
}

export default function Book ( { params }: { params: { bookId: string } } ) {
  console.log(params.bookId)

  const [bookData, setBookData] = useState<Book | null>(null)

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/books/${params.bookId}/`)
        const data = await response.json()
        setBookData(data)
        console.log(`depois da atribuição...${bookData}`)
      } catch {
        console.error("Erro ao buscar detalhes do item")
      }
    }
    fetchBookDetails()
  }, [params.bookId])

  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-white'>
      <div className='flex w-4/5 mx-30 flex-col'>
        {/* Link de voltar: */}
        <div className='flex pt-7 pb-7'>
          <Link className='flex items-center' href="/">
            <IoIosArrowBack className=' text-bg-blue' />
            <span className='font-medium'>Voltar</span>
          </Link>
        </div>
        {/* Div que engloba a imagem e o card */}
        <div className='flex h-cardSpacing justify-between'>
          {/* Imagem do livro */}
          <div className='flex w-1/2 h-full justify-center items-center'>
            <div className='w-8/12 h-5/6'>
              <img src={bookData?.cover_url} alt="livro" className='w-full h-full object-cover'/>
            </div>
          </div>
          {/* Área do Card */}
          <div className='flex w-1/2 h-full justify-end'>
            {/* Card */}
            <BuyCard
              bookName={bookData?.name}
              author={bookData?.id_producer}
              previousPrice={99.99}
              currentPrice={bookData?.price}
              textBtn="Adicionar ao carrinho" />
          </div>
        </div>
        {/* Sinopse */}
        <div className='my-12 text-justify'>
          <h2 className='text-2xl font-medium underline'>Sinopse</h2>
          <p className='font-medium mt-4 mb-5'>{bookData?.synopsis}</p>
        </div>
        {/* Especificação */}
        <div>
          <div>
            <h2 className='text-2xl mb-8 font-medium underline'>Especificações</h2>
          </div>
          <div className='flex gap-8'>
            <Specification type="author" author={bookData?.id_producer} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="pages" author={bookData?.id_producer} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="category" author={bookData?.id_producer} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="publisher" author={bookData?.id_producer} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="date" author={bookData?.id_producer} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
          </div>
          {/* Mais do gênero */}
        </div>
      </div>
    {/* Explore livros */}
    <ExploreBanner /> 
    </div>
  )
}