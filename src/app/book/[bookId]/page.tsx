"use client"
import Specification from "@/components/Specification";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ExploreBanner from "@/components/ExploreBanner";
import BuyCard from "@/components/BuyCard";
import { useEffect, useState } from "react";
import BookCarousel from "@/components/BookCarousel";
import jwt from 'jsonwebtoken'

enum Status {
  approved = 'Aprovado',
  disapproved = 'Reprovado',
  pending = 'Pendente'
}

export type Book = {
  author: string 
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
  submission_status: Status,
  synopsis: string
}

// Tipo Purcharse para adicionar a compra à biblioteca:
type Pucharse = {
  id_book: number,
  id_reader: number
}

export default function Book ( { params }: { params: { bookId: string } } ) {
  // Ebook específico da página
  const [bookData, setBookData] = useState<Book | null>(null)

  // Ebooks no total para o carrosel de categoria:
  const [books, setBooks] = useState<Book[]>([])

  // Recebendo livro:
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/books/${params.bookId}/`)
        const data = await response.json()
        setBookData(data)
      } catch {
        console.error("Erro ao buscar detalhes do ebook específico.")
      }
    }
    fetchBookDetails()
  }, [params.bookId])

  // Recebendo livros por gênero:
  useEffect(() => {
    const fetchBooksDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/books/retrieve/gender/${bookData?.gender}/`)
        const data = await response.json()
        setBooks(data)
      } catch {
        console.error("Erro ao buscar os livros.")
      }
    }
    fetchBooksDetails()
  },[bookData])

  // Estados para armazenar o token de acesso:
  const [userToken, setUserToken] = useState<any>(null)

  // useEffect para a obtenção do token do usuário:
  useEffect(() => {
    // Pegando o token do localStorage:
    const token = localStorage.getItem('token')
    try {
      if (token) {
        // Decodifica o token:
        setUserToken(jwt.decode(token))
      }
    } catch (error) {
      console.error('Erro ao decodificar o token:', error)
    }
  }, [])

  // Estado para o texto do botão de add à biblioteca:
  const [btnText, setBtnText] = useState("Adionar ao carrinho")
  // Estado para alterar a estilização do botão ao ser clicado:
  const [changeBtnClas, setchangeBtnClas] = useState('w-full bg-bg-blue font-semibold rounded-lg text-white px-4 py-3')
  // Estado para o link de download ficar disponível:
  const [linkDownload, setLinkDownload] = useState<string | null>(null)
  // Estado para armazenamento das compras do leitor logado.
  const [userPucharses, setUserPucharses] = useState<Pucharse[]>([])

  // Recebendo as compras já feitas pelo leitor.
  useEffect( () => {
    if (userToken?.user_id) {
      const fetchPucharses = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/purchases/`)
          const data = await response.json()
          console.log(data)
          setUserPucharses(data)
          
        } catch {
          console.error("Erro ao buscar as compras do leitor.")
        }
      }
      fetchPucharses()
      
    }
  }, [userToken?.user_id])

  // Função que avalia se a compra do livro em visualização está na conta do usuário logado.
  const downloadAvailable = () => {
    console.log(userPucharses)
    userPucharses.forEach(pucharse => {
      console.log(pucharse)
      if(parseInt(params.bookId) === pucharse.id_book) {
        console.log("download disponivel")
        setBtnText("Download")
        setchangeBtnClas('w-full bg-green-400 font-semibold rounded-lg text-white px-4 py-3')
        if (bookData) {
          setLinkDownload(bookData?.pdf_url)
        }
      }
    })
  }

  // Chamando a função logo depois das compras terem sido carregadas.
  useEffect( () => {
    downloadAvailable()
  }, [userPucharses])
    

//Função de adicionar à biblioteca:
const  addToLibrary = (id_reader: number, id_book: number) => {
  const putBook = async () => {
    try {
      const pucharse: Pucharse = {
        id_reader,
        id_book
      }
      const response = await fetch(`http://127.0.0.1:8000/api/readers/add_purchase_to_library/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pucharse)
      });
      setBtnText("Download")
      setchangeBtnClas('w-full bg-green-400 font-semibold rounded-lg text-white px-4 py-3')
      if (bookData) {
        setLinkDownload(bookData?.pdf_url)
      }
    } catch {
      console.error("Erro ao adicionar a compra.")
    }
  }
  putBook()
  }
  
  // Lista de 6 livros para recomendar:
  const booksCategorySix: Book[] = books.slice(0,7)
  
 //Melhorar essa lógica! Não funciona, apresentando ainda o mesmo livro.
  booksCategorySix.filter(book => book.id !== bookData?.id)

  return (
    <div className='flex flex-col items-center w-full h-full bg-white justify-center'>
      <div className='flex w-4/5 mx-30 flex-col'>
        {/* Link de voltar: */}
        <div className='flex pt-7 pb-7'>
          <Link className='flex items-center' href="../home">
            <IoIosArrowBack className=' text-bg-blue' />
            <span className='font-medium'>Voltar</span>
          </Link>
        </div>
        {/* Div que engloba a imagem e o card */}
        <div className='flex h-cardSpacing justify-between'>
          {/* Imagem do livro */}
          <div className='flex w-1/2 h-full justify-center items-center'>
            <div className='w-8/12 h-5/6'>
              <img src={bookData?.cover_url} alt="livro" className='w-full h-full'/>
            </div>
          </div>
          {/* Área do Card */}
          <div className='flex w-1/2 h-full justify-end'>
            {/* Card */}
            {bookData ? (
              <BuyCard
              bookName={bookData?.name}
              author={bookData?.author}
              currentPrice={bookData?.price}
              textBtn="Adicionar à biblioteca"
              btnText={btnText}
              changeBtnClas={changeBtnClas}
              hrefDown={linkDownload}
              functionality={() => addToLibrary(userToken.user_id, bookData.id)} />
            ): null}
          </div>
        </div>
        {/* Sinopse */}
        <div className='my-12 text-justify'>
          <h2 className='text-2xl font-medium underline'>Sinopse</h2>
          <p className='font-medium mt-4 mb-5 '>{bookData?.synopsis}</p>
        </div>
        {/* Especificação */}
        <div>
          <div>
            <h2 className='text-2xl mb-8 font-medium underline'>Especificações</h2>
          </div>
          <div className='flex gap-8'>
            <Specification type="author" author={bookData?.author} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="pages" author={bookData?.author} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="category" author={bookData?.author} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="publisher" author={bookData?.author} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
            <Specification type="date" author={bookData?.author} pagesNumber={bookData?.pages_number} category={bookData?.gender} publishCompany={bookData?.publisher} date={bookData?.date} />
          </div>
          {/* Mais do gênero */}
          <div className='mt-8'>
            <div>
              <h2 className='text-2xl mb-3 font-medium'>Do mesmo gênero:</h2>
            </div>
            <div className='flex flex-none gap-8 overflow-hidden'>
              {bookData ? (
                booksCategorySix.map((book) => (
                  <BookCarousel href={`/book/${book.id}`} functionality={() => addToLibrary(userToken.user_id, book.id)} id={book.id} img={book.cover_url} title={book.name} author={book.author} currentPrice={book.price}/>
                ))
              ): null}
            </div>
          </div>
        </div>
      </div>
    {/* Explore livros */}
    <ExploreBanner /> 
    </div>
  )
}