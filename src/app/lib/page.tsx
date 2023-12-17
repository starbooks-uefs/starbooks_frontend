import BookCover from "@/components/BookCover";
import { IoMenu } from "react-icons/io5";
import Header from "@/components/Header";

export default function () {

    return <>
        <Header />
        <div className="flex justify-center m-7">
            <div className="flex flex-col bg-white rounded-lg shadow border border-neutral-600">
                <div className="w-[190px] h-[20px] mt-4 ml-4">
                    <div className="text-neutral-600 text-m font-medium flex items-center gap-1 hover:cursor-pointer"> <IoMenu />Recentes</div>
                </div>
                <div className="flex justify-center items-center p-4">
                    <div className="flex justify-center items-center flex-wrap gap-5 p-3">
                        <BookCover img="https://assets.visme.co/templates/banners/thumbnails/i_Illustration-Book-Cover_full.jpg" title="The Human Memory" autor="Dr. Mildred S. Dresselhaus" />
                        <BookCover img="https://assets.visme.co/templates/banners/thumbnails/i_Creative-Book-Cover_full.jpg" title="Typography" autor="Michelle De Generes" />
                        <BookCover img="https://assets.visme.co/templates/banners/thumbnails/i_Children-Book-Cover_full.jpg" title="The Fluffy Alien" autor="Polly Matzinger" />
                        <BookCover img="https://cdn.flipsnack.com/landing/files/inspiring-book-cover-example.webp" title="When Climbing Everest" autor="Kaleb Joshua" />
                        <BookCover img="https://assets.visme.co/templates/banners/thumbnails/i_Inspirational-Book-Cover_full.jpg" title="The art of love" autor="Blaise Pascal" />
                        <BookCover img="https://cdn.flipsnack.com/landing/files/flowery-book-cover-template.webp" title="A study of flowers" autor="Sylvia Brooks" />
                        <BookCover img="https://cdn.flipsnack.com/landing/files/dog-training-book-cover-template.webp" title="A dog's life" autor="Layane Saah" />
                        <BookCover img="https://cdn.flipsnack.com/landing/files/dramatic-book-cover-sample.webp" title="Jeremiah" autor="a life story of the fighter" />
                    </div>
                </div>
                <div>
                    <p className="flex justify-center p-3"> ← 1 2 3 → </p>
                </div>
            </div>
        </div>
    </>
}