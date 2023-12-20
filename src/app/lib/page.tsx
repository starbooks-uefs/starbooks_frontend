import BookCover from "@/components/BookCover";
import { IoMenu } from "react-icons/io5";
import Header from "@/components/Header";
import { useState, useEffect } from 'react';

interface Book {
    cover_url: string;
    name: string;
    author: string;

}

export default function () {

    const urlBackend = process.env.NEXT_PUBLIC_URL_BACKEND
    const [books, setBooks] = useState<Book[]>([]);
    const readerId = "o id aqui"; // Substitua com o ID do leitor
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${urlBackend}/readers/${readerId}/purchases`);
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Erro ao buscar dados do backend:', error);
            }
        };

        fetchData();
    }, [urlBackend, readerId]);
    return <>
        <Header />
        <div className="flex justify-center m-7">
            <div className="flex flex-col bg-white rounded-lg shadow border border-neutral-600">
                <div className="w-[190px] h-[20px] mt-4 ml-4">
                    <div className="text-neutral-600 text-m font-medium flex items-center gap-1 hover:cursor-pointer"> <IoMenu />Recentes</div>
                </div>
                <div className="flex justify-center items-center p-4">
                    <div className="flex justify-center items-center flex-wrap gap-5 p-3">
                        {books.map((book, index) => (
                            <BookCover key={index} img={book.cover_url} title={book.name} autor={book.author} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className="flex justify-center p-3"> ← 1 2 3 → </p>
                </div>
            </div>
        </div>
    </>
}