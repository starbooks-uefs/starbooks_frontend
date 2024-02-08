"use client"

import PasswordInputLogin from "@/components/PasswordInputLogin";
import PrimaryButton from "@/components/PrimaryButton";
import UserCategorySwitch from "@/components/UserCategorySwitch";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

export default function(){
    const methods = useForm()
    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })
    return <>
        <header className="flex justify-between max-w-6xl m-auto my-6">
            <img src="/starbooks.svg" alt="logo" />
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