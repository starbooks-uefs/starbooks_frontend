'use client'
import BooksCarrousel from "@/components/BooksCarrousel";
import Carrousel from "@/components/Carrousel";
import ExploreBanner from "@/components/ExploreBanner";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
    const [recentsBooks, setRecentsBooks] = useState([])
    const [bestSellersBooks, setBestsSellersBooks] = useState([])
    const [offersBooks, setOffersBooks] = useState([])

    const getRecentsBooks = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}books`)

            if (response.ok) {
                const data = await response.json()

                console.log(data)

                setRecentsBooks(data)
            }
        } catch (error) {
            console.info(error)
        }
    }, [])

    const getBestSellersBooks = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}books`)

            if (response.ok) {
                const data = await response.json()

                setBestsSellersBooks(data)
            }
        } catch (error) {
            console.info(error)
        }
    }, [])

    const getOffersBooks = useCallback(async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}books`)

            if (response.ok) {
                const data = await response.json()

                setOffersBooks(data)
            }
        } catch (error) {
            console.info(error)
        }
    }, [])

    useEffect(() => {
        getRecentsBooks()
        getBestSellersBooks()
        getOffersBooks()
    }, [getRecentsBooks, getBestSellersBooks, getOffersBooks])

    return (
        <main>
            <Carrousel />
            <BooksCarrousel title="Recentes" booksList={recentsBooks} />
            <BooksCarrousel title="Mais vendidos" booksList={bestSellersBooks} />
            <ExploreBanner />
            <br />
            <BooksCarrousel title="Ofertas" booksList={offersBooks} />
        </main>
    )
}