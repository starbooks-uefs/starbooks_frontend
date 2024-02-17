
'use client'
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

type RemoveBook = { token: string; ebook: string; };
export default function RemoveBook( {token, ebook}:RemoveBook) {
    const BASE_URL = String(process.env.NEXT_PUBLIC_URL_BACKEND)
    function formatCurrency(valor: number){
        let valorFormatado = valor.toLocaleString("pt-br",
        {
          style: "currency",
          currency: "BRL"
        })
    
        return valorFormatado;
    }
    
    function removeEBook(idBook:number){
        const fetchRemoveBooks = async () => {
            try {
                const response = await fetch(BASE_URL+'books/'+idBook+"/", {
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json'
                    }
                });
            } catch {
                console.error("Erro ao remover o ebook.")
            }
        }
        fetchRemoveBooks()
    }

    const book: Book = JSON.parse(ebook);

    return (<div className="p-10 justify-center  flex w-[800px] h-[500px] items-center">
                <div className="flex-col justify-center w-[50%]">
                    {/* informações do livro*/}
                    <div className="mt-10 flex flex-col items-center mb-8">
                        <img src={book?.cover_url} className="w-[150px] h-[205px]  rounded"/>
                        <div className="my-2 text-center text-neutral-800 text-base font-semibold"> {book?.name}</div>
                        <div className="text-center text-neutral-500 text-xs font-normal"> {book?.author}</div>
                        <label className="my-2 items-center text-base font-semibold">{formatCurrency(Number(book?.price))}</label>
                    </div>

                    <section className="flex flex-col justify-center">
                        <p className="mb-2 text-sm">Essa ação <strong>NÃO PODERÁ</strong>  ser desfeita.
                        O livro <strong><em>{book?.name}</em></strong> será deletado <strong>permanentemente</strong>.
                        </p>
                    </section>

                    <div className="flex flex-auto mt-4 justify-center">
                        <button onClick={ () => removeEBook(Number(book?.id))} className="h-7 w-40 mr-[30px] rounded-lg items-center text-center  text-red-600 border-2 border-red-600">Remover</button>
                    </div>
                </div>
    </div>)
}