'use client'
import ProfileProps from "@/components/ProfileProps";
import Author from "../page";
import jwt from "jsonwebtoken";
import {useEffect, useState} from "react";

interface profile {
    name:string,
    last_name:string,
    email:string,
    birthdate:number,
    phone_number:number,
    cnpj:number,
    bank_name:string,
    bank_agency:number,
    number_account:number,
    account_type: string
    password: string,
}

export default function Profile() {
    const [profileAuthor, setProfileAuthor] = useState<any>()
    const [userToken, setUserToken] = useState<any>(null)
    const [editedProfile, setEditedProfile] = useState<profile>()

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
                const response = await fetch(`http://127.0.0.1:8000/api/producers/${userToken.user_id}/`)
                const data = await response.json()
                console.log(data)
                setEditedProfile({
                    name:data.name,
                    last_name:data.last_name,
                    email:data.email,
                    birthdate:data.birthdate,
                    phone_number:data.phone_number,
                    cnpj:data.cnpj,
                    bank_name:data.bank_name,
                    bank_agency:data.bank_agency,
                    number_account:data.number_account,
                    account_type: data.account_type,
                    password: data.password
                })
                setProfileAuthor(data)
            } catch {
                console.error("Erro ao buscar produtor.")
            }
        }
        fetchProfileAuthor()
    }, [userToken])

    useEffect(() => {
        console.log(editedProfile)
    }, [profileAuthor])

    return (<div>
        <Author>
        <main className=" flex-1 p-8">
            <div className="flex flex-col p-5">
                <div className="flex items-center border-b border-zinc-100 h-12 p-4">
                    <h1 className="text-zinc-300 text-xs">Perfil /</h1>
                </div>
            
                <label className="text-base font-semibold ">Dados pessoais</label>
                <section className="p-2 border border-gray-400 rounded-lg mb-8" >
                    <div className=" grid grid-cols-3  gap-y-12 m-4">
                        <ProfileProps title="Nome" description={profileAuthor?.first_name}/>
                        <ProfileProps title="Sobrenome" description={profileAuthor?.last_name}/>
                        <ProfileProps title="Email" description={profileAuthor?.email}/>
                        <ProfileProps title="Data de Nascimento" description={profileAuthor?.birthdate}/>
                        <ProfileProps title="Telefone" description={profileAuthor?.phone_number}/>
                        <ProfileProps title="CNPJ" description={profileAuthor?.cnpj}/>
                    </div>
                    {/*<button className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Editar</button>*/}
                </section>
                
                <label className="text-base font-semibold ">Autenticação</label>
                <section className="p-2 border border-gray-400 rounded-lg mb-8" >

                    <div className=" grid grid-cols-3  gap-y-12 m-4">
                        <ProfileProps title="Senha" description={profileAuthor?.password}/>
                    </div>
                    {/*<button className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Alterar senha </button>*/}
                </section>

                <label className="text-base font-semibold ">Dados bancários</label>
                <section className="p-2 border border-gray-400 rounded-lg mb-8">
                    <div className=" grid grid-cols-3  gap-y-12 m-4">
                        <ProfileProps title="Banco" description={profileAuthor?.bank_name}/>
                        <ProfileProps title="Agência" description={profileAuthor?.bank_agency}/>
                        <ProfileProps title="Número da conta" description={profileAuthor?.number_account}/>
                        <ProfileProps title="Tipo da conta" description={profileAuthor?.account_type}/>
                    </div>
                    {/*<button className="ml-4  h-6 px-4 rounded-sm  items-center text-center text-blue-950  border-2 border-blue-950 text-sm"> Editar</button>*/}
                </section>
            </div>
        </main>
        </Author>
    </div>)
}