'use client'

import Author from "../page";
import jwt from "jsonwebtoken";
import {useEffect, useState} from "react";
import { format } from 'date-fns';

export default function Profile() {
    const BASE_URL = String(process.env.NEXT_PUBLIC_URL_BACKEND)
    const [profileAuthor, setProfileAuthor] = useState<any>(null)
    const [userToken, setUserToken] = useState<any>(null)
    const [personalData, setPersonalData] = useState({
            id: 0 ,
            password: "",
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            birthdate: "",
            phone_number: 0,
            cnpj: 0,
            bank_name: '',
            bank_agency:0,
            number_account: 0,
            account_type:'',
    });
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        try {
            if (token) {
                setUserToken(jwt.decode(token))
            }
        } catch {
            console.error("Erro ao decodificar o token.")
        }
    }, [])

    useEffect(() => {
        const fetchProfileAuthor = async () => {
            try {                           

                const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/producers/${userToken.user_id}/`)

                const data = await response.json()
                console.log("Dados do produtor",data)
                setPersonalData({
                    id:data?.id,
                    password: data?.password,
                    username: data?.username,
                    bank_name: data?.bank_name,
                    bank_agency:data?.bank_agency,
                    number_account: data?.number_account,
                    account_type: data?.account_type,
                    first_name: data?.first_name,
                    last_name: data?.last_name,
                    email: data?.email,
                    birthdate: data?.birthdate,
                    cnpj: data?.cnpj,
                    phone_number:  data?.phone_number
                })
                setProfileAuthor(data)
            } catch {
                console.error("Erro ao buscar produtor.")
            }
        }
        fetchProfileAuthor()
    }, [userToken])

    const personalChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setPersonalData({ ...personalData, [name]: value });
    }

    const personalDataSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(personalData);
        const fetchEditPersonalData = async () => {
            try {
                console.log(BASE_URL+'producers/'+profileAuthor?.id)
                const response = await fetch(BASE_URL+'producers/'+profileAuthor?.id+"/", {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id:personalData?.id,
                        password: personalData?.password,
                        username: personalData?.username,
                        bank_name: personalData?.bank_name,
                        bank_agency:personalData?.bank_agency,
                        number_account: personalData?.number_account,
                        account_type: personalData?.account_type,
                        first_name: personalData?.first_name,
                        last_name: personalData?.last_name,
                        email: personalData?.email,
                        birthdate: format(new Date(personalData?.birthdate,), 'dd/MM/yyyy'),
                        cnpj: personalData?.cnpj,
                        phone_number:personalData?.phone_number
                    })
                });
                console.log(response)
            } catch {
                console.error("Erro ao editar o ebook.")
            }
        }
        fetchEditPersonalData()
    }
    
    return (<div>
        <Author>
        <main className=" flex-1 p-8">
            <div className="flex flex-col p-5">
                <div className="flex items-center border-b border-zinc-100 h-12 p-4">
                    <h1 className="text-zinc-300 text-xs">Perfil /</h1>
                </div>

                <label className="text-base font-semibold ">Dados pessoais</label>
                <form onSubmit={personalDataSubmit} className="p-2 border border-gray-400 rounded-lg mb-8" >
                    <section className=" grid grid-cols-3  gap-y-12 m-4" >

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Nome</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.first_name)}
                            type="text"
                            name="first_name"
                            value={personalData.first_name}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Sobrenome</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.last_name)}
                            type="text"
                            name="last_name"
                            value={personalData.last_name}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Email</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.email)}
                            type="text"
                            name="email"
                            value={personalData.email}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Data de nascimento</label>
                        <input className=" text-gray-400 focus:outline-none w-[70%]"
                            placeholder= {String(profileAuthor?.birthdate)}
                            type="date"
                            name="birthdate"
                            value={personalData.birthdate}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Telefone</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.phone_number)}
                            type="number"
                            name="birthdate"
                            value={personalData.phone_number}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>CNPJ</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.cnpj)}
                            type="number"
                            name="cnpj"
                            value={personalData.cnpj}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Senha</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.password)}
                            type="password"
                            name="password"
                            value={personalData.password}
                            onChange={personalChange}
                        />
                        </div>

                    </section>
                    <button type="submit" className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Confirmar alterações</button>
                </form>
                
                <label className="text-base font-semibold ">Dados bancários</label>
                <form onSubmit={personalDataSubmit} className="p-2 border border-gray-400 rounded-lg mb-8" >
                    <section className=" grid grid-cols-3  gap-y-12 m-4" >

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Nome do banco</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.bank_name)}
                            type="text"
                            name="bank_name"
                            value={personalData.bank_name}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Agência</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.bank_agency)}
                            type="number"
                            name="bank_agency"
                            value={personalData.bank_agency}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Número da conta</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.number_account)}
                            type="number"
                            name="number_account"
                            value={personalData.number_account}
                            onChange={personalChange}
                        />
                        </div>

                        <div className="font-semibold flex text-sm flex-col">
                        <label>Tipo da conta</label>
                        <input className=" text-gray-400 focus:outline-none"
                            placeholder= {String(profileAuthor?.account_type)}
                            type="text"
                            name="account_type"
                            value={personalData.account_type}
                            onChange={personalChange}
                        />
                        </div>

                    </section>
                    <button type="submit" className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Confirmar alterações </button>
                </form>
                
            </div>
        </main>
        </Author>
    </div>)
}