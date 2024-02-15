import Carrousel from "@/components/Carrousel";
import CategorySlider from "@/components/CategorySlider";
import ExploreBanner from "@/components/ExploreBanner";
import RecentBookSlider from "@/components/RecentBooksSlider";
import BannerHome01 from "@/components/icons/Banner_home_1";

export default function Home() {
    const [recentsBooks, setRecentsBooks] = useState([])
    const [bestSellersBooks, setBestsSellersBooks] = useState([])
    const [allBooks, setAllBooks] = useState([])

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

                setAllBooks(data)
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
            <section className="max-w-[1440px] w-full p-16">
                <h2 className="text-2xl font-semibold">Descubra os mais vendidos de cada categoria</h2>
                <CategorySlider />

                <h2 className="text-2xl font-semibold mt-10">Recentes</h2>
                <RecentBookSlider />
                <h2 className="text-xl font-semibold mt-10">Mais vendidos</h2>
                <RecentBookSlider />
            </section>
            <ExploreBanner />
            <br />
            <BooksCarrousel title="Todos" booksList={allBooks} />
        </main>
    )
}