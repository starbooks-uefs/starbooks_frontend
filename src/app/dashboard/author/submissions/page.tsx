'use client'
import Author from "../page";
import './MultiSelect.css';
import BookForm from "./BookForm";

export default function Submissions(props: any) {

    return (<div>
        <Author>
            <main>
                <div>
                    <h1 className="font-semibold">Informações do Livro</h1>
                    <div>
                        <BookForm></BookForm>
                    </div>
                </div>
            </main>
        </Author>
    </div>)
}