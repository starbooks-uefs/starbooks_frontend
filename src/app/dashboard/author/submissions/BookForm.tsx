import FormInput from "@/components/FormInput";
import Multiselect from "multiselect-react-dropdown";

export default function BookForm() {

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


    function onSelect() {

    }

    function onRemove() {

    }

    function valueFormChange(value: any) {
        console.log(value)
    }

    async function handleSubmit(event: any) {
        event.preventDefault();

        const data = {
            name: String(event.target.name.value),
            authors: String(event.target.authors.value),
            date: new Date(event.target.publicationDate.value)
        }

        console.log(data)

        const urlBackend = process.env.NEXT_PUBLIC_URL_BACKEND



        try {
            const res = await fetch(`${urlBackend}books`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }


    }

    return (<div>




        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <FormInput id="name" inputType="text" label="Nome da Obra" placeholder="Nome" />
            <FormInput id="authors" inputType="text" label="Autores" placeholder="Autores" />
            <label htmlFor="bookGenderOptions" className="font-semibold text-sm" >Gênero</label>
            <Multiselect id="gender" className="MultiSelect"
                placeholder="Selecione"
                isObject={false}
                avoidHighlightFirstOption={true}
                options={state.bookGenderOptions}
                onSelect={onSelect}
                onRemove={onRemove}

            />
            <FormInput id="publicationDate" inputType="date" label="Data de Publicação" placeholder="" />

            <label htmlFor="indicativeClassification" className="font-semibold text-sm" >Classificação Indicativa</label>
            <select className="bg-white border-2 rounded-lg py-4 px-3 text-sm">
                <option value="livre">Livre</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>

            </select>

            <FormInput id="edition" inputType="number" label="Edição" placeholder="0" />
            <FormInput id="amountPage" inputType="number" label="Quantidade de Páginas" placeholder="0" />

            <FormInput id="language" inputType="text" label="Idioma" placeholder="Idioma" />
            <FormInput id="publishingCompany" inputType="text" label="Editora" placeholder="Editora" />
            <FormInput id="price" inputType="number" label="Valor" placeholder="R$ 0" />
            <label htmlFor="synopsis" className="font-semibold text-sm" >Sinopse</label>
            <textarea className="bg-white border-2 rounded-lg py-4 px-3 text-sm" />
            <FormInput id="pdf" inputType="file" label="Pdf do Livro" placeholder="" />

            <div className="terms mb-8">
                <input className="py-4 px-3 text-sm" type="checkbox" id="topping" name="topping" value="true" /> <span className="text-semibold">Li e Concordo com os Termos e Condições de Uso</span>
            </div>

            <div>
                <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Submeter para Análise</button>
            </div>
        </form>
    </div>)
}