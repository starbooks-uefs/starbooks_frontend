'use client'
import BookCover from "@/components/BookCover";
import Head from "next/head";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Link from "next/link";

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

export default function Lib() {

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
    const [booksData, setBooksData] = useState<Book[] | null>(null)
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
        <>
            <Head>
                <title>Biblioteca</title>
            </Head>
            <div className="flex justify-center align-items-center">
                <div className="m-10 bg-white rounded-lg shadow border border-neutral-600 flex justify-center flex-col">
                    <div className="pt-10 h-[19px] justify-center items-center gap-2 inline-flex">
                        <div className="w-[123px] text-neutral-600 text-lg font-medium flex flex-line gap-1 hover:cursor-pointer">
                            <h1>Sua biblioteca</h1>
                        </div>
                    </div>
                    <div className="p-7 flex-1 flex-wrap flex justify-center items-center">
                        <div className="gap-2 flex-[0_0_80%] content-none box-border">
                            {booksData?.map((book) => (
                                <Link href={`/book/${book.id}`}>
                                    <BookCover
                                        key={book.id}
                                        img={book.cover_url}
                                        title={book.name}
                                        autor={book.author}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}