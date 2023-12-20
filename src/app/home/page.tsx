import Carrousel from "@/components/Carrousel";
import CategorySlider from "@/components/CategorySlider";
import ExploreBanner from "@/components/ExploreBanner";
import RecentBookSlider from "@/components/RecentBooksSlider";
import BannerHome01 from "@/components/icons/Banner_home_1";

export default function Home() {
    const recentBooks = [
        {
            title: 'Teste'
        }
    ]

    const moreSells = [
        {
            title: 'Teste'
        }
    ]

    const offers = [
        {
            title: 'Teste'
        }
    ]

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
            <section className="max-w-[1440px] w-full p-16">
                <h2 className="text-xl font-semibold">Ofertas</h2>
                <RecentBookSlider />
            </section>
        </main>
    )
}