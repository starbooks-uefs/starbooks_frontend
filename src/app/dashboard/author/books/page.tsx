'use client'
import Author from "../page";
import BookCover from "@/components/BookCover";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { GiSelect } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import EditBook from "./edit/page";
import RemoveBook from "./remove/page";

enum Status {
    approved = 'Aprovado',
    disapproved = 'Reprovado',
    pending = 'Pendente'
}

interface Book{
    author: string,
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

export default function Books() {
    const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND
    
    const [userToken, setUserToken] = useState<any>(null)
    const [booksData, setBooksData] = useState<Book[] | null>(null)

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

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const profile = await fetch(`${BASE_URL}/producers/${userToken.user_id}/`)
                const author = await profile.json()
                
                const response = await fetch(`${BASE_URL}/books/retrieve/author/${author.first_name.toLowerCase()}/`)
                const data = await response.json()
                console.log(data)
                if(data.length == 0){
                    const newResponse = await fetch(`${BASE_URL}/books/retrieve/author/${author.last_name.toLowerCase()}/`)
                    const newData = await newResponse.json()
                    setBooksData(newData)
                }else{
                    setBooksData(data)
                }
                
            } catch {
                console.error("Erro ao buscar ebooks.")
            }
        }
        fetchBooks()
    }, [userToken])

    function openWindow(idBook:string) {
        console.log(idBook)
        const modal = document.querySelector("#"+idBook) as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }

    function closeWindow(id:string){
        const modal = document.querySelector("#"+id) as HTMLDialogElement;
        if (modal) {
            modal.close();
        }
    }

    function formatCurrency(valor: number){
        let valorFormatado = valor.toLocaleString("pt-br",
        {
          style: "currency",
          currency: "BRL"
        })

        return valorFormatado;
    }

    return (<div>
        <Author>
        <main className=" flex-1 p-8">
            <div className="flex flex-col p-5">
                <div className="flex items-center border-b border-zinc-100 h-12 p-4">
                    <h1 className="text-zinc-300 text-xs">Livros /</h1>
                </div>
                    <div className="gap-5">
                        {booksData?.map((book) => (
                            <section key={book.id} className="mb-2 flex pr-8 rounded-md h-[250px] items-center bg-gradient-to-t from-gray-100 to-white">

                                <dialog className="p-4 rounded-md"  id={"edit"+book.id}>
                                    <label className="text-gray-400 flex items-center gap-2"> <GiSelect/><strong>Editar preço do livro </strong> <h3 className=" font-semibold">{book.name}</h3> <button onClick={() => closeWindow(String("edit"+book.id))} className=" rounded-full text-gray-400 border border-gray-400 mr-0 ml-auto"><IoIosCloseCircleOutline/></button></label>
                                    <EditBook token={JSON.stringify(userToken)} ebook= {JSON.stringify(book)}/>
                                </dialog>
                                
                                <dialog className="p-4 rounded-md" id={"remove"+book.id}>
                                    <label className="text-gray-400 flex items-center gap-2"> <GiSelect/><strong>Remover o livro </strong> <h3 className=" font-semibold">{book.name}</h3> <button onClick={() => closeWindow(String("remove"+book.id))} className=" rounded-full text-gray-400 border border-gray-400 mr-0 ml-auto"><IoIosCloseCircleOutline/></button></label>
                                    <RemoveBook token={JSON.stringify(userToken)} ebook= {JSON.stringify(book)}/>
                                </dialog>
                                
                                <dialog id= {String("synopsis"+book.id)} className="p-2 text-gray-600 border border-gray-400 rounded-md max-w-[40%] ">
                                    <label className="flex items-center gap-2"> <GiSelect/><strong>Sinopse: </strong> <h3 className=" font-semibold">{book.name}</h3> <button onClick={() => closeWindow(String("synopsis"+book.id))} className=" rounded-full text-gray-400 border border-gray-400 mr-0 ml-auto"><IoIosCloseCircleOutline/></button></label>
                                    <p>{book.synopsis}</p>
                                </dialog>

                                <div className="ml-0 mr-auto" >
                                    <BookCover  key={book.id} img={book.cover_url} title={book.name} autor={book.author}/>
                                    <h4 className=" text-center text-xs font-semibold">{formatCurrency(Number(book?.price))}</h4>
                                    
                                </div>
                                
                                <button onClick={() => openWindow(String("synopsis"+book.id))} className="text-gray-600 mb-[150px]"> <VscBook/></button>
                                <div className="bg-white grid gap-x-10 text-gray-600 rounded-md grid-cols-3 ml-2 mr-2 text-sm ">
                                    <label className="m-2" ><strong>Gênero</strong><p className="flex items-center border-b border-gray-400 gap-2" ><GiSelect/>{book.gender}</p></label>
                                    <label className="m-2"><strong>Classificaçã indicativa</strong> <p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/> {book.rating}</p></label>
                                    <label className="m-2"><strong>Edição</strong><p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.edition}</p></label>
                                    <label className="m-2"><strong>Quantidade de páginas</strong><p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.pages_number}</p></label>
                                    <label className="m-2"><strong>Idioma</strong> <p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.language}</p></label>
                                    <label className="m-2"><strong>Editora</strong> <p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.publisher}</p></label>
                                </div>

                                <div className="w-40 flex flex-col mr-0 ml-auto ">
                                    <button onClick={() => openWindow("") } className="h-7 w-40 mt-25 rounded-lg items-center text-center  text-blue-300  border-2 border-blue-300">Ir á página do livro"</button>
                                    <button onClick={() => openWindow(String("edit"+book.id))} className="h-7 w-40 my-2 rounded-lg items-center text-center  text-blue-300  border-2 border-blue-300">Alterar preço</button>
                                    <button onClick={() => openWindow(String("remove"+book.id)) } className="h-7 w-40 mb-25 rounded-lg items-center text-center  text-red-600  border-2 border-red-600">Remover</button>                                
                                </div>

                            </section>
                        ))}
                    </div>
                </div>
            </main>
        </Author>
    </div>)
}