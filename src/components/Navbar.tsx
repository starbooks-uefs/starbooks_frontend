"use client"
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { Book } from "@/entities/Book";


export default function Navbar() {

  // Ebook específico da pesquisa
  const [bookData, setBookData] = useState<Book | null>(null)

  // useRouter() para a mudança de página no ato da pesquisa
  const router = useRouter()

  // Recebendo o token do usuário logado.
  const [userToken, setUserToken] = useState<any>(null)
  useEffect(() => {
      const token = localStorage.getItem('token')
      try {
          if (token) {
              setUserToken(jwt.decode(token))

          }
      } catch {
          console.error("Erro ao decodificar o token.")
      }
  }, [])

  const [inputValue, setInputValue] = useState('')

  // Função para lidar com a mudança no input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o estado com o valor atual do input
    setInputValue(event.target.value);
  };

  // Função de busca de livro
  const handleClick = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/search/?name=${inputValue}`)
      const data = await response.json()
      setBookData(data[0])
    } catch {
      console.error("Erro ao buscar detalhes do ebook específico.")
    }
  }

  // useEffect para buscar o livro quando a lupa de pesquisa é clicada
  useEffect(() => {
    if(bookData) {
      router.push(`/book/${bookData.id}/`)
    }
  }, [bookData])

  return (
    // Div que engloba todo a navbar
    <div className='flex flex-col w-full h-44'>
      {/* Div que engloba toda a área em azul */}
      <div className='w-full h-12 flex justify-center bg-bg-blue'>
        {/* Div que engloba o conteúdo da área em azul */}
        <div className='w-4/5 my-auto flex justify-between'>
          {/* Frase da parte em azul */}
          <div className='text-base text-white'>
            <p>Comprar e vender e-books nunca foi tão fácil!</p>
          </div>
          {/* Links da parte em azul */}
          <div className='flex gap-6 my-auto text-xs text-white '>
            <div>
              <Link href="/register/author">Quero vender</Link>
            </div>
            <div>
              <Link href="https://github.com/starbooks-uefs">Quem somos</Link>
            </div>
            <div>
              <Link href="https://github.com/starbooks-uefs">Central de ajuda</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Div da logo */}
      <div className='w-full h-20 flex justify-center'>
        {/* Conteúdo da div da logo */}
        <div className='flex gap-10 justify-center items-center w-4/5 my-auto'>
          {/* Div da imagem do logo */}
          <div className='flex-none'>
            {userToken ? (
              <Link href='/home'>
                <img src="/starbooks.svg" alt="logo" className='w-36 h-30' />
              </Link>
            ): (
              <Link href='/'>
                <img src="/starbooks.svg" alt="logo" className='w-36 h-30' />
              </Link>
            )}
            
          </div>
          {/* Div da barra de pesquisa */}
          <div className='w-4/5'>
            {/* Div da área da barra */}
            <div className='flex justify-between items-center w-full h-9 rounded-2xl bg-whiteSeachField'>
              {/* Div da lupa de pesquisa */}
              <div onClick={() => handleClick()} className='ml-4 flex-none cursor-pointer'>
                <FiSearch />
              </div>
              {/* Div do input */}
              <div className='flex-1'>
                <input type="text" name="" id="" value={inputValue} onChange={handleChange} className='w-full ml-2 outline-none bg-whiteSeachField'/>
              </div>
              {/* Div do filtro */}
              <div className='flex items-center gap-1 mx-3 border-l-2'>
                <h1 className='ml-3 text-sm'>Todos</h1>
                <FiChevronDown className='text-black' />
              </div>
            </div>
          </div>
          {/* Div dos links de carrinho, biblioteca e minha conta */}
          {userToken ? (
            <div className='flex flex-none justify-center items-center gap-6 whitespace-nowrap'>
              <div className='flex flex-col justify-center text-2xl items-center'>
                <Link href="/" className='flex flex-col justify-center text-2xl items-center'>
                  <FiShoppingCart />
                  <h1 className='text-xs mt-1'>Carrinho</h1>
                </Link>
              </div>  
              <div className='flex flex-col justify-center text-2xl items-center'>
                <Link href="/dashboard/user/books" className='flex flex-col justify-center text-2xl items-center'>
                  <FiBookOpen />
                  <h1 className='text-xs mt-1'>Meus livros</h1>
                </Link>
              </div>
              <div className='flex flex-col justify-center text-2xl items-center'>
                <Link href="/dashboard/user" className='flex flex-col justify-center text-2xl items-center'>
                  <FiUser />
                  <h1 className='text-xs mt-1'>Minha conta</h1>
                </Link>
              </div>
            </div>
          ):(
            <div className='flex flex-none justify-center items-center gap-6 whitespace-nowrap'>
            <div className='flex flex-col justify-center text-2xl items-center'>
              <Link href="/login" className='flex flex-col justify-center text-2xl items-center'>
                <FiUser />
                <h1 className='text-xs mt-1'>Fazer login</h1>
              </Link>
            </div>
          </div>
          )}
        </div>
      </div>
      <hr />
      {/* Div dos filtros */}
      <div className='w-full mt-3 flex gap-12 justify-center items-center'>
        <div>
          <Link href="/" className='flex gap-1 justify-center items-center'>
            <FiMenu />
            <p className='text-sm'>Categorias</p>
          </Link>
        </div>
        <div>
          <Link href="/" className='flex justify-center items-center'>
            <p className='text-sm'>Mais vendidos</p>
          </Link>
        </div>
        <div>
          <Link href="/" className='flex justify-center items-center'>
            <p className='text-sm'>Ofertas</p>
          </Link>
        </div>
        <div>
          <Link href="/" className='flex justify-center items-center'>
            <p className='text-sm'>Recentes</p>
          </Link>
        </div>
      </div>
    </div>
  )
}