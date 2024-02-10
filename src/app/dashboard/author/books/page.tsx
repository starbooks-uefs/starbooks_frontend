'use client'
import Author from "../page";
import BookCover from "@/components/BookCover";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Link from 'next/link';
import { GiSelect } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";
import { IoIosCloseCircleOutline } from "react-icons/io";


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

{
    //editBook(token:string, book:Book)
}

export default function Books() {
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
    
    {/*
    useEffect(() => {
        setBooksData([{
            author: "Dr. Mildred S. Dresselhaus",
            cover_url: "https://assets.visme.co/templates/banners/thumbnails/i_Illustration-Book-Cover_full.jpg",
            date: "string",
            edition: 1,
            gender: "Ação",
            id: 1,
            id_producer: 1,
            language: "Português-BR",
            name: "The Human Memory",
            pages_number: 400,
            pdf_url: "string",
            price: 127.5,
            publisher: "string",
            rating: 1,
            submission_date:" string",
            submission_reason:" string",
            submission_status: Status.approved,
            synopsis: 'Simplesmente'
        },
        {
            author: "Dr. Mildred S. Dresselhaus",
            cover_url: "https://assets.visme.co/templates/banners/thumbnails/i_Illustration-Book-Cover_full.jpg",
            date: "string",
            edition: 1,
            gender: "Ação",
            id: 2,
            id_producer: 1,
            language: "Português-BR",
            name: "The Human Memory 2",
            pages_number: 400,
            pdf_url: "string",
            price: 127.5,
            publisher: "string",
            rating: 1,
            submission_date:" string",
            submission_reason:" string",
            submission_status: Status.approved,
            synopsis: 'Num mundo pós-apocalíptico onde a humanidade luta pela sobrevivência, uma jovem corajosa embarca em uma jornada épica para encontrar a última esperança da humanidade: uma lendária cidade perdida nas montanhas. Enfrentando perigos inimagináveis e traições mortais, ela descobre segredos obscuros que mudarão o destino de todos. Em "Além das Ruínas", o destino da humanidade está nas mãos de uma única pessoa.'
        }])
    }, [])*/}

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                console.log(userToken.user_id)
                const response = await fetch(`http://127.0.0.1:8000/api/producers/books/${userToken.user_id}/`)
                const data = await response.json()
                setBooksData(data)
                console.log(data)
            } catch {
                console.error("Erro ao buscar detalhes do ebook específico.")
            }
        }
        fetchBooks()
    }, [[userToken]])  


    function viewEBook(){
        
    }

    function viewModal(idBook:string) {
        console.log(idBook)
        const modal = document.querySelector("#"+idBook) as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }

    function closeSynopsis(id:string){
        const modal = document.querySelector("#" + id) as HTMLDialogElement;
        if (modal) {
            modal.close();
        }
    }

    return (<div>
        <Author>
            <main className="pt-10">
                
                <div className="flex flex-col rounded-lg p-1">
                    <div className="gap-5">
                        {booksData?.map((book) => (
                            
                            <section key={book.id} className="flex pr-8 rounded-md h-[250px] items-center bg-gradient-to-t from-gray-200 to-white">
                                <dialog id={"edit"+book.id}>

                                </dialog>
                                <dialog id={"remove"+book.id}>
                    
                                </dialog>
                                
                                <dialog id= {String("synopsis"+book.id)} className="p-2 text-gray-600 border border-gray-400 rounded-md max-w-[40%] ">
                                    <label className="flex items-center gap-2"> <GiSelect/><strong>Sinopse: </strong> <h3 className=" font-semibold">{book.name}</h3> <button onClick={() => closeSynopsis(String("synopsis"+book.id))} className=" rounded-full text-gray-400 border border-gray-400 mr-0 ml-auto"><IoIosCloseCircleOutline/></button></label>
                                    <p>{book.synopsis}</p>
                                </dialog>

                                <div className="ml-0 mr-auto" >
                                    <BookCover  key={book.id} img={book.cover_url} title={book.name} autor={book.author}/>
                                </div>

                                <button onClick={() => viewModal(String("synopsis"+book.id))} className="text-gray-600 mt-4 mb-auto"> <VscBook/></button>

                                <div className="bg-white grid gap-x-10 text-gray-600 rounded-md grid-cols-3 ml-2 mr-2 text-sm ">
                                    <label className="m-2" ><strong>Gênero</strong><p className="flex items-center border-b border-gray-400 gap-2" ><GiSelect/>{book.gender}</p></label>
                                    <label className="m-2"><strong>Classificaçã indicativa</strong> <p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/> {book.rating}</p></label>
                                    <label className="m-2"><strong>Edição</strong><p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.edition}</p></label>
                                    <label className="m-2"><strong>Quantidade de páginas</strong><p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.pages_number}</p></label>
                                    <label className="m-2"><strong>Idioma</strong> <p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.language}</p></label>
                                    <label className="m-2"><strong>Editora</strong> <p className="flex items-center border-b border-gray-400 gap-2"><GiSelect/>{book.publisher}</p></label>
                                </div>

                                <div className="w-40 flex flex-col mr-0 ml-auto ">
                                    <button onClick={ () => viewEBook() } className="h-7 w-40 mt-25 rounded-lg items-center text-center  text-blue-300  border-2 border-blue-300">Ir á página do livro"</button>
                                    <Link href="books/edit?token=">   {/*token:string, book:Book */ }
                                        <h4 className="h-7 w-40 my-2 rounded-lg items-center text-center  text-blue-300  border-2 border-blue-300">Alterar preço</h4>
                                    </Link>
                                    <Link href="books/remove?token=">   {/*token:string, book:Book */ }
                                        <button className="h-7 w-40 mb-25 rounded-lg items-center text-center  text-red-600  border-2 border-red-600">Remover</button>
                                    </Link>                                
                                </div>

                            </section>
                        ))}
                    </div>
                </div>
            </main>
        </Author>
    </div>)
}