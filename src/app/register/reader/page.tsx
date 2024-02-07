"use client"

import FormInput from "@/components/FormInput";
import GenderSwitch from "@/components/GenderSwitch";
import IconFormInput from "@/components/IconFormInput";
import MaskFormInput from "@/components/MaskFormInput";
import SectionForm from "@/components/SectionForm";
import SimpleHeader from "@/components/SimpleHeader";
import Image from "next/image";
import Link from "next/link";
import { FiCreditCard } from "react-icons/fi";

export default function(){
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
                <SectionForm sections={[
                    [
                        <FormInput key="name" id="first_name" inputType="text" label="Nome" placeholder="Informe seu primeiro nome"/>,
                        <FormInput key="last_name" id="last_name" inputType="text" label="Sobrenome" placeholder="Informe seu sobrenome"/>,
                        <FormInput key="birthday" id="birthday" inputType="date" label="Data de nascimento" placeholder="Informe sua data de nascimento"/>,
                    ],
                    [
                        <FormInput key="username" id="username" inputType="email" label="Nome de usuário" placeholder="Informe seu nome de usuário" />,
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