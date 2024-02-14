
'use client'
import Author from "../../page";
import {useEffect, useState} from "react";
import Link from 'next/link';
import Router from "next/router";

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

function formatCurrency(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br",
    {
      style: "currency",
      currency: "BRL"
    })

    return valorFormatado;
}

function removeEBook(token: string, idBook:string){
    
    const fetchEditBooks = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/producers/${token}/books/remove/${idBook}`)
        } catch {
            console.error("Erro ao apagar o ebook.")
        }
    }
    fetchEditBooks()
}

export default function remove(token:string) {
    const [book, setBook] = useState<Book>();
    const [bookName, setBookName] = useState("");

    useEffect(() => {
        setBook({
            author: "Dr. Mildred S. Dresselhaus",
            cover_url: "https://assets.visme.co/templates/banners/thumbnails/i_Illustration-Book-Cover_full.jpg",
            date: "string",
            edition: 1,
            gender: "string",
            id: 1,
            id_producer: 1,
            language: "string",
            name: "The Human Memory",
            pages_number: 1,
            pdf_url: "string",
            price: 127.5,
            publisher: "string",
            rating: 1,
            submission_date:" string",
            submission_reason:" string",
            submission_status: Status.approved,
            synopsis: "string"
        })
    }, [])

    return (<div >
        <Author >
            <main className="flex w-[100%] flex-col items-center">
                <div className="flex-col justify-center w-[50%]">
                    {/* informações do livro*/}
                    <div className="mt-10 flex flex-col items-center mb-8">
                        <img src={book?.cover_url} className="w-[150px] h-[205px]  rounded"/>
                        <div className="my-2 text-center text-neutral-800 text-base font-semibold"> {book?.name}</div>
                        <div className="text-center text-neutral-500 text-xs font-normal"> {book?.author}</div>
                        <label className="my-2 items-center text-base font-semibold">{formatCurrency(Number(book?.price))}</label>
                    </div>

                    
                    <section className="flex flex-col justify-center">
                        <p className="mb-2 text-sm">Essa ação <strong>NÃO PODERÁ</strong>  ser desfeita.
                        O livro <strong><em>{book?.name}</em></strong> será deletado <strong>permanentemente</strong>.
                        </p>
                    </section>

                    <div className="flex flex-auto mt-4 justify-center">
                        <button onClick={ () => removeEBook(token, String(book?.id.toString))} className="h-7 w-40 mr-[30px] rounded-lg items-center text-center  text-red-600 border-2 border-red-600">Remover</button>
                        <Link href="../books">
                            <h4 className="h-7 w-40 rounded-lg items-center text-center text-blue-300 border-2 border-blue-300">Cancelar</h4>
                        </Link>
                    </div>
                </div>
            </main>
        </Author>
    </div>)
}


