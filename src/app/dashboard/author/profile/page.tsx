'use client'
import Author from "../page";
import jwt from "jsonwebtoken";
import {useEffect, useState} from "react";

interface descriptionAuthor{
    id:number,
    name:string,
    last_name:string,
    email:string,
    birthdate:string,
    phone_number:number,
    cnpj:number,
    bank_name:string,
    bank_agency:string,
    number_account:string,
    account_type: "poupança" | "corrente"
}

export default function Profile() {
    const [profileAuthor, setProfileAuthor] = useState<descriptionAuthor>()
    const [editedProfileAuthor, setEditedProfileAuthor] = useState<descriptionAuthor>()
    //const [userToken, setUserToken] = useState<any>(null)
    const [editedNameAuthor, setEditedNameAuthor] = useState<string>("")

    useEffect(() => {
        setProfileAuthor({
            id:1,
            name:"Jacob",
            last_name:"Alemida",
            email:"jasdaw@",
            birthdate:"22/00/2132",
            phone_number:75992686378,
            cnpj: 92873132,
            bank_name:"string",
            bank_agency:"string",
            number_account:"1111",
            account_type:"poupança"
        })
    }, [])

    useEffect(() => {
        setEditedProfileAuthor(profileAuthor)
        setEditedNameAuthor(String(profileAuthor?.name));
    }, [profileAuthor])


    {/*
    useEffect(() => {
        const token = localStorage.getItem('token')
        try {
            if (token) {
                setUserToken(jwt.decode(token))
            }
        } catch {
            console.error("Erro ao decodificar o token.")
        }
    }, [])   */}

    function replacePriceEBook(token: string, price:string, idBook:string){
        const fetchEditBooks = async () => {
            try {       
                {/*http://127.0.0.1:8000/api/producers/${token}/books/${idBook}/edit?price=${price} */}                        
                const response = await fetch(`Corrigir Rota`)
            } catch {
                console.error("Erro ao apagar o ebook.")
            }
        }
        fetchEditBooks()
    }

    function toggleEditable() {
        console.log(profileAuthor?.name)
        console.log(editedNameAuthor)
        var input = document.getElementById("nameAuthor") as HTMLInputElement;
        if (input.readOnly) {
            input.readOnly = false; // Torna o input editável
        } else {
            input.readOnly = true; // Torna o input não editável
        }
        console.log(profileAuthor?.name)
    }

    return (<div>
        <Author>
            <main className="flex flex-col py-4">

                <label className="text-base font-semibold ">Dados pessoais</label>
                <section className="p-2 border border-gray-400 rounded-lg mb-8" >
                    <div className=" grid grid-cols-3  gap-y-12 m-4">
                        
                        <input id="nameAuthor" className="px-4  h-10  border border-gray-300 rounded-md  justify-between items-center inline-flex"
                            placeholder= {String(profileAuthor?.name)}
                            value={editedNameAuthor}
                            onChange={ (e) => setEditedNameAuthor(e.target.value)}
                        />
                        
                    </div>
                    <button onClick={() => toggleEditable()} className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Editar</button>
                </section>
                
                <label className="text-base font-semibold ">Autenticação</label>
                <section className="p-2 border border-gray-400 rounded-lg mb-8" >
                    <div className=" grid grid-cols-3  gap-y-12 m-4">
                        
                    </div>
                    <button className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Alterar senha </button>
                </section>

                <label className="text-base font-semibold ">Dados bancários</label>
                <section className="p-2 border border-gray-400 rounded-lg mb-8">
                    <div className=" grid grid-cols-3  gap-y-12 m-4">
                        
                        </div>
                    <button className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Editar </button>
                </section>

                <section>
                    <label className="text-base font-semibold ">Cupons e descontos</label>
                </section>
                

            </main>
        </Author>
    </div>)
}