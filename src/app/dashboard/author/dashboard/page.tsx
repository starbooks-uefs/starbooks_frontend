'use client'
import BlueField from "@/components/BlueField";
import Author from "../page";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import BookCover from "@/components/BookCover";

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

interface BookMetrics{
    author: string,
    cover_url: string,
    id: number,
    name: string,
    purchase_count: number,
	total_revenue:number,
}

const Dashboard = ({ children }: any) => {
    const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND
    const [userToken, setUserToken] = useState<any>()
    const [booksData, setBooksData] = useState<any[]>()
    const [update, setUpdate] = useState<BookMetrics[]>([])

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

    function addedMetrics(book:Book){
        const fetchBooksMetrics = async () => {
            try {
                console.log("Buscando metricas")
                console.log(`${BASE_URL}/purchase/${book.id}/`)
                const bookMetrics = await fetch(`${BASE_URL}/api/purchase/${book.id}/`);
                const data = await bookMetrics.json();
                const updatedBook = {
                    author: book.author,
                    cover_url: book.cover_url,
                    id: book.id,
                    name: book.name,
                    purchase_count: data.purchase_count,
                    total_revenue: data.total_revenue
                };
                setUpdate(tarefas => [...tarefas, updatedBook])

            } catch (error) {
                console.error("Error fetching book metrics:", error);
            }
        }
        fetchBooksMetrics()
        
    }

    useEffect(() => {
            booksData?.map((ebook: Book) => addedMetrics(ebook)) 
    }, [booksData])

    return (
        <div className="flex">
            <Author>
            {/*Dashboard*/}
            <main className=" flex-1 p-8">
                <div className="flex flex-col p-5">

                    <div className="flex items-center border-b border-zinc-100 h-12 p-4 mb-4">
                        <h1 className="text-zinc-300 text-xs">Dashboard /</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {update?.map((book) => (
                            <>
                            <div id={String(book.id)} key={book.id} className="p-4 flex rounded-md border-2 border-gray-300">
                                <BookCover img={book.cover_url} title={book.name} autor={book.author} />
                                <div className="flex flex-col justify-center items-center gap-0.5 hover:cursor-pointer">
                                    <BlueField title="Vendas Totais" value={String(book.purchase_count)}/>
                                    <BlueField title="Arrecadação total" value={String(book.total_revenue)}/>
                                </div>
                            </div>
                            </>
                        ))} 
                    </div> 
                </div>
            </main>
            </Author>
        </div>
    );
};

export default Dashboard;


