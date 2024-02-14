"use client"

import PasswordInputLogin from "@/components/PasswordInputLogin";
import PrimaryButton from "@/components/PrimaryButton";
import UserCategorySwitch from "@/components/UserCategorySwitch";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import Link from "next/link";
import {FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// Login forçado (APAGAR DEPOIS QUE A PÁGINA DE LOGIN FOR CONCLUÍDA)
type User = {
    email: string,
    password: string
    user_type: "reader" | "author"
}
export default function(){
    const methods = useForm()
    const router = useRouter()
    const onSubmit = methods.handleSubmit(async data => {
        const user = data as User
        const BASE_URL = "http://127.0.0.1:8000/api"
        console.log(user)
        try {
        // Envia credenciais para o servidor
        const response = await fetch( user.user_type == "reader"? `${BASE_URL}/readers/login/`:`${BASE_URL}/producers/login/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(!response.ok)
            throw new Error(JSON.stringify(response.body))
        const data = await response.json()
        localStorage.setItem('token', data.access_token)
        if(user.user_type == "reader")
            router.push("/home")
        else
            router.push("/dashboard/author")
        } catch (error:any) {
        console.error('Erro durante o login:', error.message);
        }
    })

    return <>
        <header className="flex justify-between max-w-6xl m-auto my-6">
            <Link href='/'>
                <img src="/starbooks.svg" alt="logo" className='w-36 h-30' />
            </Link>
        </header>
        <main className="flex justify-between items-start max-w-6xl m-auto mt-15 h-[calc(100%-3rem)]">
            <div className="flex justify-center items-center">
                <Image className="mt-12" alt="ilustration" src="/undraw_reading.svg" width={400} height={400}/>
            </div>
            <div className="flex flex-col w-full max-w-sm">
                <div>
                    <h1 className="text-blue-400 font-semibold text-center text-3xl">Login</h1>
                    <p className="my-2 text-center">Insira os dados abaixo para acessar sua conta</p>
                </div>
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-4 mt-8" >
                        <FormInput key="email" id="email" inputType="text" label="Email" placeholder="Example@email.com"/>
                        <PasswordInputLogin recoveryLink=""/>
                        <UserCategorySwitch/>
                        <PrimaryButton className="w-full bg-blue-500 font-semibold rounded-lg text-white px-4 py-3" text="Entrar" onClick={onSubmit}/>    
                    </form>
                </FormProvider>
                <div className="flex flex-col text-center gap-3 mt-7">
                    <p className="text-sm text-center">Ainda não é cadastrado na plataforma?</p>
                    <Link className="text-blue-500 font-medium text-sm" href={"/register/reader"}> Quero ser leitor</Link>
                    <Link className="text-blue-500 font-medium text-sm" href={"/register/author"}> Quero ser produtor</Link>
                </div>
            </div>
        </main>
    </>
}