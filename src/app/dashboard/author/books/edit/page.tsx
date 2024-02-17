
'use client'
import {useEffect, useState} from "react";

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

type EditBook = { token: string; ebook: string; };

export default function EditBook( {token, ebook}:EditBook) {

    const book: Book = JSON.parse(ebook);
    const [newPrice, setNewPrice] = useState<number>();

    const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND

    function formatCurrency(valor: number){
        let valorFormatado = valor.toLocaleString("pt-br",
        {
          style: "currency",
          currency: "BRL"
        })

        return valorFormatado;
    }

    function replacePriceEBook(price:number, idBook:number){
        const fetchEditBooks = async () => {
            try {
                console.log(price)
                const response = await fetch(BASE_URL+'update_book_price/'+idBook+"/", {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"price":price})
                });
                console.log(response)
            } catch {
                console.error("Erro ao editar o ebook.")
            }
        }
        fetchEditBooks()
    }


    return (<div className="p-10 justify-center  flex w-[800px] h-[500px] items-center">
                
        <div className="flex flex-col items-center">
            <img src={book?.cover_url} className="w-[175px] h-[270px] rounded"/>
            <div className="my-2 text-center text-neutral-800 text-base font-semibold"> {book?.name}</div>
            <div className="text-center text-neutral-500 text-xs font-normal"> {book?.author}</div>
            <label className="my-2 items-center text-base font-semibold">{formatCurrency(Number(book?.price))}</label>
        </div>

        <div className="m-10">
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

            <div className="flex flex-auto mt-4 justify-center ">
                <button onClick={ () => replacePriceEBook(Number(newPrice), Number(book?.id) ) } className="h-7 w-40 mr-[30px] rounded-lg items-center text-center text-blue-300 border-2 border-blue-300">Alterar preço</button>
            </div>
        </div>
    </div>)
}


