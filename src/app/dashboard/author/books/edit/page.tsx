
'use client'
import Author from "../../page";
import {useEffect, useState} from "react";
import Link from 'next/link';

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

function replacePriceEBook(token: string, price:string, idBook:string){
    const fetchEditBooks = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/producers/${token}/books/${idBook}/edit?price=${price}`)
            
        } catch {
            console.error("Erro ao apagar o ebook.")
        }
        
    }
    fetchEditBooks()
}

export default function EditBook( token:string, book:Book) {
    const [newPrice, setNewPrice] = useState<number>();
    useEffect(() => {setNewPrice(book?.price)}, [book])

    return (<div >
        <Author >
            <main className="flex mt-[20px] w-[100%] flex-col items-center">
                <div className="flex-col justify-center w-[50%]">
                    {/* informações do livro*/}
                    <div className="flex flex-col items-center mb-8">
                        <img src={book?.cover_url} className="w-[175px] h-[270px] rounded"/>
                        <div className="my-2 text-center text-neutral-800 text-base font-semibold"> {book?.name}</div>
                        <div className="text-center text-neutral-500 text-xs font-normal"> {book?.author}</div>
                        <label className="my-2 items-center text-base font-semibold">{formatCurrency(Number(book?.price))}</label>
                    </div>

                    
                    <form className="flex flex-col justify-center">
    
                        <label className="text-sm">Preço atual</label>
                        <h3 className="text-gray-400 px-4  h-10 border border-gray-300 rounded-md justify-between items-center inline-flex">{formatCurrency(Number(book?.price))}</h3>
                        
                        <label className="text-sm mt-2">Preço novo*</label>
                        <input className="px-4  h-10  border border-gray-300 rounded-md  justify-between items-center inline-flex"
                            type="number"
                            placeholder= {String(book?.price)}
                            value={newPrice}
                            min="0"
                            step="1"
                            required
                            onChange={ (e) => setNewPrice(Number(e.target.value))}
                        />
                    </form>

                    <div className="flex flex-auto mt-4 justify-center">
                        <button onClick={ () => replacePriceEBook(token, String(newPrice?.toString ), String(book?.id.toString) ) } className="h-7 w-40 mr-[30px] rounded-lg items-center text-center text-blue-300 border-2 border-blue-300">Alterar preço</button>
                        <Link href="../books">
                            <h4 className="h-7 w-40 rounded-lg items-center text-center  text-red-600 border-2 border-red-600">Cancelar</h4>
                        </Link>
                    </div>
                </div>
            </main>
        </Author>
    </div>)
}


