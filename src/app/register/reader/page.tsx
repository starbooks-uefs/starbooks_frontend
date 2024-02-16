"use client"

import FormInput from "@/components/FormInput";
import GenderSwitch from "@/components/GenderSwitch";
import IconFormInput from "@/components/IconFormInput";
import MaskFormInput from "@/components/MaskFormInput";
import SectionForm from "@/components/SectionForm";
import SimpleHeader from "@/components/SimpleHeader";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect, redirect, useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { FiCreditCard } from "react-icons/fi";

export type Reader = {
    first_name:string,
	last_name:string,
	birthdate:string,
	username:string,
	password:string,
	gender:string,
	email:string,
	cpf:string,
	phone_number:string,
	card_number:string,
	cardholder:string,
	cvv:string,
	card_date:string
}

export default function(){
    const router = useRouter()
    const handleSubmit = async (values:FieldValues) => {
        const reader = values as Reader
        const birthdate = new Date(reader.birthdate)
        const cardDate = new Date(reader.card_date)
        reader.birthdate = `${birthdate.getDay()}/${birthdate.getMonth() + 1}/${birthdate.getFullYear()}`
        reader.card_date = `${cardDate.getDay()}/${cardDate.getMonth() + 1}/${cardDate.getFullYear()}`
        reader.cpf = reader.cpf.replace(/\.|-/gm,'')
        try {
          // Envia credenciais para o servidor
          const response = await fetch(`http://127.0.0.1:8000/api/readers/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reader),
            redirect:"follow"
          });
          if(!response.ok){
            const message = await response.json();
            throw new Error(`${JSON.stringify(message)}`)
          }
          router.push("/login")
        } catch (error:any) {
          console.error(error.message)
        }
      };

    return <>
        <SimpleHeader/>
        <main className="flex justify-between items-start max-w-6xl m-auto mt-15 h-[calc(100%-3rem)]">
            <div className="flex justify-center items-center">
                <Image className="mt-12" alt="ilustration" src="/undraw_reading.svg" width={400} height={400}/>
            </div>
            <div className="flex flex-col w-full max-w-sm">
                <div className="flex flex-col gap-1">
                    <h1 className="text-blue-400 font-semibold text-center text-3xl">Cadastro</h1>
                    <p className="text-center">Insira os dados abaixo para realizar seu cadastro</p>
                </div>
                <SectionForm onFetch={handleSubmit} sections={[
                    [
                        <FormInput key="name" id="first_name" inputType="text" label="Nome" placeholder="Informe seu primeiro nome"/>,
                        <FormInput key="last_name" id="last_name" inputType="text" label="Sobrenome" placeholder="Informe seu sobrenome"/>,
                        <FormInput key="birthdate" id="birthdate" inputType="date" label="Data de nascimento" placeholder="Informe sua data de nascimento"/>,
                    ],
                    [
                        <FormInput key="username" id="username" inputType="text" label="Nome de usuário" placeholder="Informe seu nome de usuário" />,
                        <FormInput key="password" id="password" inputType="password" label="Senha" placeholder="Utilize letras, números e simbolos(Ex: @,#)"/>,
                        <GenderSwitch/>
                    ],
                    [
                        <FormInput key="email" id="email" inputType="email" label="Email" placeholder="Exemplo@email.com" />,
                        <MaskFormInput mask="000.000.000-00" placeholder="Digite o seu CPF" label="CPF" id="cpf" key="cpf" />,
                        <MaskFormInput mask="(00) 0 0000-0000" placeholder="Digite o seu telefone" label="Telefone" id="phone_number" key="phone_number"/>,
                    ],
                    [
                       <IconFormInput mask="0000 0000 0000 0000" icon={<FiCreditCard/>} key="card_number" id="card_number" inputType="email" label="Número do cartão de crédito" placeholder="0000 0000 0000 0000" />,
                       <FormInput key="cardholder" id="cardholder" inputType="text" label="Nome do titular" placeholder="Informe o nome do titular"/>,
                       <div className="flex justify-between">
                        <MaskFormInput mask="000" placeholder="Número de 3 dígitos" label="CVV" id="cvv" key="cvv"/>,
                       <FormInput key="card_date" id="card_date" inputType="date" label="Data de vencimento" placeholder="Informe sua data de nascimento"/>
                       </div>
                    ]
                ]} className="mt-6"/>
                <div className="flex flex-col text-center gap-2 mt-6">
                    <p className="text-sm text-center">Já possui cadastro na plataforma?</p>
                    <Link className="text-blue-500 font-medium text-sm" href={"/login"}>Fazer login</Link>
                </div>
            </div>
        </main>
    </>
}