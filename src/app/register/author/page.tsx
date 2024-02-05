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
                    <p className="text-center">Insira os dados abaixo para realizar seu cadastro como autor</p>
                </div>
                <SectionForm sections={[
                    
                ]} className="mt-6"/>
                <div className="flex flex-col text-center gap-2 mt-6">
                    <p className="text-sm text-center">Já possui cadastro na plataforma?</p>
                    <Link className="text-blue-500 font-medium text-sm" href={"/login"}>Fazer login</Link>
                </div>
            </div>
        </main>
    </>
}