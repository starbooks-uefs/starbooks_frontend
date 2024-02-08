"use client"

import FormInput from "@/components/FormInput";
import MaskFormInput from "@/components/MaskFormInput";
import SectionForm from "@/components/SectionForm";
import Select from "@/components/AccountTypeSelect";
import SimpleHeader from "@/components/SimpleHeader";
import Image from "next/image";
import Link from "next/link";

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
                        <FormInput key="name" id="name" inputType="text" label="Nome" placeholder="Informe seu primeiro nome"/>,
                        <FormInput key="last-name" id="last-name" inputType="text" label="Sobrenome" placeholder="Informe seu sobrenome"/>,
                        <FormInput key="birthday" id="birthday" inputType="date" label="Data de nascimento" placeholder="Informe sua data de nascimento"/>
                    ],
                    [
                        <FormInput key="username" id="username" inputType="text" label="Nome de usuário" placeholder="Informe seu nome de usuário" />,
                        <FormInput key="password" id="password" inputType="password" label="Senha" placeholder="Utilize letras, números e simbolos(Ex: @,#)"/>,
                    ],
                    [
                        <FormInput key="email" id="email" inputType="email" label="Email" placeholder="Exemplo@email.com" />,
                        <MaskFormInput mask="00.000.000/0000-00" placeholder="Digite o seu CNPJ" label="CNPJ" id="cnpj" key="cnpj" />,
                        <MaskFormInput mask="(00) 0 0000-0000" placeholder="Digite o seu telefone" label="Telefone" id="tel" key="tel"/>,
                    ],
                    [
                        <FormInput key="bank_name" id="bank_name" inputType="text" label="Nome do banco" placeholder="Informe o nome do banco"/>,
                        <MaskFormInput mask="00000000000" placeholder="Informe o número da sua conta" label="Número da conta" id="number_account" key="number_account" />,
                        <MaskFormInput mask="00000000000" placeholder="Informe o número da agência bancária" label="Agência bancária" id="bank_agency" key="bank_agency" />,
                        <Select id="account_type" label="Tipo de conta" key="account_type" />
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