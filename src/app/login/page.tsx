import FormInput from "@/components/FormInput";
import PasswordInputLogin from "@/components/PasswordInputLogin";
import PrimaryButton from "@/components/PrimaryButton";
import UserCategorySwitch from "@/components/UserCategorySwitch";
import Link from "next/link";

export default function(){
    return <>
        <header className="flex justify-between max-w-6xl m-auto my-6">
            <img src="/starbooks.svg" alt="logo" />
        </header>
        <main className="flex justify-between items-center max-w-6xl m-auto my-16">
            <div className="flex flex-col justify-center items-center"><img src="/undraw_reading.svg" alt="ilustration" /></div>
            <div className="flex flex-col ">
                <div>
                    <h1 className="text-blue-400 font-semibold text-center text-3xl">Login</h1>
                    <p className="my-2 text-center">Insira os dados abaixo para acessar sua conta</p>
                </div>
                <form className="flex flex-col gap-4 my-8">
                    <FormInput id="email" inputType="text" label="Email" placeholder="Example@email.com"/>
                    <PasswordInputLogin recoveryLink=""/>
                    <UserCategorySwitch/>
                    <PrimaryButton className="" text="Entrar"/>    
                </form>
                <div className="flex flex-col text-center gap-3 my-4">
                    <p className="text-sm text-center">Ainda não é cadastrado na plataforma?</p>
                    <Link className="text-blue-500 font-medium text-sm" href={""}> Quero ser leitor</Link>
                    <Link className="text-blue-500 font-medium text-sm" href={""}> Quero ser produtor</Link>
                </div>
            </div>
        </main>
    </>
}