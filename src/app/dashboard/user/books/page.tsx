'use client'
import BookCover from "@/components/BookCover";
import { IoMenu } from "react-icons/io5";
import Head from "next/head";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

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

type User = {
    email: string,
    password: string
}

const user: User = {
    email: "reader@reader.com",
    password: "reader"
}
const handleLogin = async () => {
    try {
        // Envia credenciais para o servidor
        const response = await fetch(`http://127.0.0.1:8000/api/readers/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = response.json()
        data.then((res) => {
            localStorage.setItem('token', res.access_token)
        })
    } catch (error) {
        console.error('Erro durante o login:', error);
    }
};

export default function Lib() {

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
    }, [])

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


    return (
        <>
            <Head>
                <title>Biblioteca</title>
            </Head>
            <div className="flex justify-center align-items-center">
                <div className="m-10 w-[650px] h-[550px] bg-white rounded-lg shadow border border-neutral-600 flex justify-center flex-col p-3">
                    <div className="w-[189px] pt-10 h-[19px] justify-center items-center gap-2 inline-flex">
                        <div className="w-[123px] text-neutral-600 text-xs font-medium flex flex-line gap-1 hover:cursor-pointer">
                            <IoMenu /> Recentes
                        </div>
                    </div>
                    <div className="p-7 flex justify-center items-center">
                        <div className="gap-5">
                            {booksData?.map((book) => (
                                <BookCover
                                    key={book.id}
                                    img={book.cover_url}
                                    title={book.name}
                                    autor={book.author}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}