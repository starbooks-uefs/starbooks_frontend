'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookCarousel, { BookCarouselProps } from './BookCarousel';
import { Book } from '@/app/lib/page';

type TBooksCarrousel = {
    title: string
    booksList: Book[]
}

export default function BooksCarrousel ({ booksList, title }:TBooksCarrousel) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      return (
        <div>
            <h3 className='text-2xl font-semibold px-12'>{title}</h3>
            <Carousel className='px-12 pb-12 pt-4' responsive={responsive}>
                {booksList && booksList.map((book, key) => {
                    return <BookCarousel key={key} author={book.author} currentPrice={book.price} href={`/book/${book.id}`} id={book.id} img={book.cover_url}  title={book.name}/>
                })}
            </Carousel>
        </div>
      )
}