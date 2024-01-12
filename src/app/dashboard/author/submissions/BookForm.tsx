import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/ProgressBar";
import { createClient } from "@supabase/supabase-js";
import axios, { AxiosRequestConfig } from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useRef, useState } from "react";
import { NumericFormat } from 'react-number-format'


export default function BookForm() {
    const [genderSelectList, setGenderSelectList] = useState([])
    const [price, setPrice] = useState<string | number | undefined | null>(null)
    const [cover, setCover] = useState('')
    const [pdf, setPdf] = useState('')
    const [progress, setProgress] = useState(0);
    const [uploadingCoverFile, setUploadingCoverFile] = useState(false);
    const [uploadingPdfFile, setUploadingPdfFile] = useState(false);


    const formRef = useRef<HTMLFormElement>(null);

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
    const uploadFile = async (event: any, typeBookFile: string, config?: AxiosRequestConfig) => {
        const file = event.target.files[0];
        const bucket = String(process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME)

        typeBookFile == 'pdf' ? setUploadingPdfFile(true) : setUploadingCoverFile(true);

        try {
            let formData = new FormData();
            formData.append("media", file);

            const options: AxiosRequestConfig = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // @ts-ignore
                    ...supabase.auth.headers
                },
                onUploadProgress: (progressEvent: any) => {
                    const percentage = (progressEvent.loaded * 100) / progressEvent.total;
                    setProgress(+ percentage.toFixed(2));
                },
            };

            await axios.post(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/${bucket}/${file.name}`, formData, options);
            alert('Arquivo Submetido Com Sucesso!');

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

            setUploadingPdfFile(false)
            setUploadingCoverFile(false);


        } catch (e: any) {
            console.error(e);
            const error =
                e.response && e.response.data
                    ? e.response.data.error
                    : 'Erro ao Realizar Upload do Arquivo';
            alert(error);
            setUploadingPdfFile(false)
            setUploadingCoverFile(false);
        }
    };



    async function handleSubmit(event: any) {
        event.preventDefault();

        const newBook = {

            name: String(event.target.name.value),
            author: String(event.target.author.value),
            gender: String(event.target.gender.value),
            date: new Date(event.target.publicationDate.value).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
            rating: Number(event.target.rating.value),
            edition: Number(event.target.edition.value),
            pages_number: Number(event.target.amountPage.value),
            language: String(event.target.language.value),
            publisher: String(event.target.publisher.value),
            price: Number(price),
            synopsis: String(event.target.synopsis.value),
            cover_url: cover,
            pdf_url: pdf,
            id_producer: 2,
        }


        const urlBackend = process.env.NEXT_PUBLIC_URL_BACKEND


        const res = await fetch(`${urlBackend}add_book/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(newBook)
        }).then(resp => {
            if (!resp.ok) {
                alert('Erro ao Enviar Livro Para Análise!\n' + resp.statusText);
            }
            else {
                alert('Livro Submetido Para Análise com Sucesso!');
                clearForm()
            }
        });

        function clearForm() {
            setGenderSelectList([])
            setPrice('')
            setCover('')
            setPdf('')
            formRef.current?.reset();
        }

    }

    return (<div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <FormInput id="name" inputType="text" label="Nome da Obra" placeholder="Nome" />
            <FormInput id="author" inputType="text" label="Autor" placeholder="Autor" />
            <FormInput id="gender" inputType="text" label="Gênero" placeholder="Gênero" />
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
            <label htmlFor="price" className="font-semibold text-sm" >Valor</label>
            <NumericFormat
                value={price}
                onValueChange={(values) => {
                    setPrice(values.floatValue)
                }}
                id="price"
                placeholder="R$ 0"
                className="bg-white border-2 rounded-lg py-4 px-3 text-sm"
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
            />
            <label htmlFor="synopsis" className="font-semibold text-sm" >Sinopse</label>
            <textarea id="synopsis" className="bg-white border-2 rounded-lg py-4 px-3 text-sm" placeholder="Sinopse" />
            <FormInput id="cover" inputType="file" label="Capa do Livro" placeholder="" onValueChange={uploadCover} disabled={uploadingPdfFile} classNameInput="block w-full text-sm
                    text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-bg-blue
                    hover:file:bg-blue-100" />
            <ProgressBar progress={progress} show={uploadingCoverFile}></ProgressBar>
            <FormInput id="pdf" inputType="file" label="Pdf do Livro" placeholder="" onValueChange={uploadPdf} disabled={uploadingCoverFile} classNameInput="block w-full text-sm
                    text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-bg-blue
                    hover:file:bg-blue-100" />
            <ProgressBar progress={progress} show={uploadingPdfFile}></ProgressBar>

            <div className="terms mb-8">
                <input className="py-4 px-3 text-sm" type="checkbox" id="topping" name="topping" value="true" /> <span className="text-semibold">Li e Concordo com os Termos e Condições de Uso</span>
            </div>


            <div>
                <button type="submit" disabled={uploadingCoverFile || uploadingPdfFile} className="text-bg-blue hover:text-white border border-bg-blue hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submeter para Análise</button>
            </div>
        </form>
    </div>)
}