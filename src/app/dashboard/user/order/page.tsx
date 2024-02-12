'use client'
import OrderCard from "@/components/OrderCard";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Book } from "../books/page";

const Order = ({ children }: any) => {

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

    //Recebendo os livros que o leitor já obteve.
    const [booksData, setBooksData] = useState<Book[] | null>([])
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/books/`)
                const data = await response.json()
                setBooksData(data)
                console.log(data)
            } catch {
                console.error("Erro ao buscar detalhes do ebook específico.")
            }
        }
        fetchBooks()
    }, [userToken?.user_id])


    return (
        <div className="flex flex-col">
            <h1 className="ml-10 text-xl font-semibold">Pedidos</h1>
            {booksData ? (
                booksData.map((book) => (
                    <OrderCard
                        img={book.cover_url}
                        title={book.name}
                        author={book.author}
                        date={book.date}
                        currentPrice={book.price}
                        id={book.id}
                    />
                ))
            ): null}
        </div>
    );
};

export default Order;
