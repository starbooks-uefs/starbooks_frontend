'use client'
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BookCarousel from "./BookCarousel";
import { Book } from "@/app/book/[bookId]/page";

export default function RecentBookSlider () {
    const [recentBooks, setRecentBooks] = useState<Book[]>([])

    useEffect(() => {
        const getRecentBooks = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/books/current-month/`)

            if (response.ok) {
                const info = await response.json()
                setRecentBooks(info)
            }
        }

        getRecentBooks()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: recentBooks.length - 1,
        slidesToScroll: 1
      };

    return (
        <div className="w-full mt-8 relative">
            <Slider {...settings}>
                {recentBooks.map((book) => {
                    return <div className="mr-8">
                        <BookCarousel href={""} id={book.id} img={book.cover_url} title={book.name} author={book.author} currentPrice={book.price} />
                    </div> 
                })}
            </Slider>
        </div>
    )
}