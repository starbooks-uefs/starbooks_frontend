import { SlUser } from "react-icons/sl";
import { GoBook } from "react-icons/go";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";

type SpecificationProps = {
  type: string,
  author: string | undefined,
  pagesNumber: number | undefined,
  category: string | undefined,
  publishCompany: string | undefined,
  date: string | undefined
}

export default function Specification ({type, author, pagesNumber, category, publishCompany, date}: SpecificationProps) {
  return (
    <div className='flex flex-col w-52 h-52 rounded-full items-center justify-center bg-bg-blue text-white'>
      {type == 'author' ? (
        <div className='flex flex-col items-center justify-center text-center'>
          <p>Autor</p>
          <SlUser className='text-white w-14 h-14 my-2'/>
          <p>{author}</p>
        </div>
      ): null}
      {type == 'pages' ? (
        <div className='flex flex-col items-center justify-center text-center'>
          <p>N° de páginas</p>
          <GoBook className='text-white w-14 h-14 my-2'/>
          <p>{pagesNumber}</p>
        </div>
      ): null}
      {type == 'category' ? (
        <div className='flex flex-col items-center justify-center text-center'>
          <p>Gênero</p>
          <MdOutlineCategory className='text-white w-14 h-14 my-2'/>
          <p>{category}</p>
        </div>
      ): null}
      {type == 'publisher' ? (
        <div className='flex flex-col items-center justify-center text-center'>
          <p>Editora</p>
          <IoMdBusiness className='text-white w-14 h-14 my-2'/>
          <p>{publishCompany}</p>
        </div>
      ): null}
      {type == 'date' ? (
        <div className='flex flex-col items-center justify-center text-center'>
          <p>Data de publicação</p>
          <LuCalendarClock className='text-white w-14 h-14 my-2'/>
          <p>{date}</p>
        </div>
      ): null}

    </div>
  )
}