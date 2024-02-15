"use client"
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    // Div que engloba todo a navbar
    <div className='flex flex-col w-full h-auto'>
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
              <Link href="/">Quem somos</Link>
            </div>
            <div>
              <Link href="/">Central de ajuda</Link>
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
            <img src="/starbooks.svg" alt="logo" className='w-36 h-30' />
          </div>
          {/* Div da barra de pesquisa */}
          <div className='w-4/5'>
            {/* Div da área da barra */}
            <div className='flex justify-between items-center w-full h-9 rounded-2xl bg-whiteSeachField'>
              {/* Div da lupa de pesquisa */}
              <div className='ml-4 flex-none'>
                <FiSearch />
              </div>
              {/* Div do input */}
              <div className='flex-1 '>
                <input type="text" name="" id="" value={inputValue} onChange={handleChange} className='w-full outline-none bg-whiteSeachField'/>
              </div>
            </div>
          </div>
          {/* Div dos links de carrinho, biblioteca e minha conta */}
          <div className='flex flex-none justify-center items-center gap-6 whitespace-nowrap'>
            <div className='flex flex-col justify-center text-2xl items-center'>
              <Link href="/" className='flex flex-col justify-center text-2xl items-center'>
                <FiShoppingCart />
                <h1 className='text-xs mt-1'>Carrinho</h1>
              </Link>
            </div>  
            <div className='flex flex-col justify-center text-2xl items-center'>
              <Link href="../lib" className='flex flex-col justify-center text-2xl items-center'>
                <FiBookOpen />
                <h1 className='text-xs mt-1'>Meus livros</h1>
              </Link>
            </div>
            <div className='flex flex-col justify-center text-2xl items-center'>
              <Link href="/" className='flex flex-col justify-center text-2xl items-center'>
                <FiUser />
                <h1 className='text-xs mt-1'>Minha conta</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}