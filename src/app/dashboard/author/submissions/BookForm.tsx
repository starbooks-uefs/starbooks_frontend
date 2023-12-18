import FormInput from "@/components/FormInput";
import { createClient } from "@supabase/supabase-js";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

export default function BookForm() {
    const [genderSelectList, setGenderSelectList] = useState([])
    const [cover, setCover] = useState('')
    const [pdf, setPdf] = useState('')

    const state = {
        bookGenderOptions: [
            "Fantasia",
            "Ficção científica",
            "Distopia",
            "Ação e aventura",
            "Ficção Policial",
            "Horror",
            "Thriller e Suspense",
            "Ficção histórica",
            "Romance",
            "Novela",
            "Ficção Feminina",
            "LGBTQ+",
            "Ficção Contemporânea",
            "Realismo mágico",
            "Graphic Novel",
            "Conto",
            "Young adult - Jovem adulto",
            "New adult - Novo Adulto",
            "Infantil",
            "Memórias e autobiografia",
            "Biografia",
            "Gastronomia",
            "Arte e Fotografia",
            "Autoajuda",
            "História",
            "Viagem",
            "Crimes Reais",
            "Humor",
            "Ensaios",
            "Guias & Como fazer",
            "Religião e Espiritualidade",
            "Humanidades e Ciências Sociais",
            "Paternidade e família",
            "Tecnologia e Ciência",
        ]

    };

    function uploadCover(event: any) {
        uploadFile(event, 'cover')
    }

    function uploadPdf(event: any) {
        uploadFile(event, 'pdf')
    }



    const supabase = createClient(String(process.env.NEXT_PUBLIC_SUPABASE_URL),
        String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY));

    // Handle file upload event
    const uploadFile = async (event: any, typeBookFile: string) => {
        const file = event.target.files[0];
        const bucket = String(process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME)

        // Call Storage API to upload file
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(file.name, file);

        // Handle error if upload failed
        if (error) {
            alert('Error uploading file.' + error);
            return;
        }

        else {
            const { data } = supabase
                .storage
                .from(bucket)
                .getPublicUrl(file.name)

            if (typeBookFile == 'cover') {
                setCover(data.publicUrl)
            }

            else {
                setPdf(data.publicUrl)
            }

            console.log(data.publicUrl)
        }

        alert('File uploaded successfully!');
    };



    async function handleSubmit(event: any) {
        event.preventDefault();

        const newBook = {
            name: String(event.target.name.value),
            author: String(event.target.author.value),
            gender: String(genderSelectList),
            date: event.target.publicationDate.value,
            rating: Number(event.target.rating.value),
            edition: Number(event.target.edition.value),
            pages_number: Number(event.target.amountPage.value),
            language: String(event.target.language.value),
            publisher: String(event.target.publisher.value),
            price: Number(event.target.price.value),
            synopsis: String(event.target.synopsis.value),
            cover_url: cover,
            pdf_url: pdf,
            id_producer: 2,
        }

        console.log(newBook)

        const urlBackend = process.env.NEXT_PUBLIC_URL_BACKEND



        try {
            const res = await fetch(`${urlBackend}add_book/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(newBook)
            });


        } catch (err) {
            console.log(err);
        }


    }

    return (<div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <FormInput id="name" inputType="text" label="Nome da Obra" placeholder="Nome" />
            <FormInput id="author" inputType="text" label="Autor" placeholder="Autor" />
            <label htmlFor="bookGenderOptions" className="font-semibold text-sm" >Gênero</label>
            <Multiselect id="gender" className="MultiSelect"
                placeholder="Selecione"
                isObject={false}
                avoidHighlightFirstOption={true}
                options={state.bookGenderOptions}
                onSelect={setGenderSelectList}
                onRemove={setGenderSelectList}

            />
            <FormInput id="publicationDate" inputType="date" label="Data de Publicação" placeholder="" />

            <label htmlFor="rating" className="font-semibold text-sm" >Classificação Indicativa</label>
            <select id="rating" className="bg-white border-2 rounded-lg py-4 px-3 text-sm">
                <option value={0}>Livre</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
                <option value={14}>14</option>
                <option value={16}>16</option>
                <option value={18}>18</option>
            </select>

            <FormInput id="edition" inputType="number" label="Edição" placeholder="0" />
            <FormInput id="amountPage" inputType="number" label="Quantidade de Páginas" placeholder="0" />

            <FormInput id="language" inputType="text" label="Idioma" placeholder="Idioma" />
            <FormInput id="publisher" inputType="text" label="Editora" placeholder="Editora" />
            <FormInput id="price" inputType="number" label="Valor" placeholder="R$ 0" />
            <label htmlFor="synopsis" className="font-semibold text-sm" >Sinopse</label>
            <textarea id="synopsis" className="bg-white border-2 rounded-lg py-4 px-3 text-sm" />
            <FormInput id="cover" inputType="file" label="Capa do Livro" placeholder="" onValueChange={uploadCover} />
            <FormInput id="pdf" inputType="file" label="Pdf do Livro" placeholder="" onValueChange={uploadPdf} />

            <div className="terms mb-8">
                <input className="py-4 px-3 text-sm" type="checkbox" id="topping" name="topping" value="true" /> <span className="text-semibold">Li e Concordo com os Termos e Condições de Uso</span>
            </div>

            <div>
                <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Submeter para Análise</button>
            </div>
        </form>
    </div>)
}