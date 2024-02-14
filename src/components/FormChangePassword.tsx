"use client"

import CancelButton from "@/components/CancelButton";
import FormInput from "@/components/FormInput";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import jwt from "jsonwebtoken";


type formChangePasswordProps = {
    className?: string,
    onChangePassword: () => void
    onClickButtonCancel: MouseEventHandler
}


function FormChangePassword({ className, onChangePassword, onClickButtonCancel }: formChangePasswordProps) {
    const methods = useForm()
    const formRef = useRef<HTMLFormElement>(null)


    // Recebendo o token do usuário logado.
    const [userToken, setUserToken] = useState<any>(null)
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


    async function handleSubmit(event: any) {
        console.log(event.target)
        event.preventDefault();

        const changePassword = {
            old_password: String(event.target.old_password.value),
            new_password: String(event.target.new_password.value),
            confirm_password: String(event.target.confirm_password.value),
        }

        const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND

        if (!changePassword.old_password || !changePassword.new_password || !changePassword.confirm_password) {
            alert('Por favor, preencha todos os campos!');
            return
        }


        if (changePassword.new_password != changePassword.confirm_password) {
            alert('Senhas não conferem!');
            return
        }

        fetch(`${BASE_URL}users/${userToken.user_id}/change_password/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changePassword)

        }).then(async res => {
            if (res.ok) {
                alert('Senha alterada com sucesso!');
                onChangePassword()
                formRef.current?.reset();
            }

            else if (res.status == 400) {
                alert('Senha atual incorreta!');

            }

            else {
                return res.text().then(text => { throw new Error(text) })
            }
        }).catch(err => {
            alert(`${err}`);
        });
    }


    return (
        <div className={`${className ?? ""}`}>
            <div className="ml-10  mt-3 rounded-lg shadow border border-neutral-600 w-96 h-96">
                <div className=" font-semibold p-3">
                    <FormProvider {...methods}>
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8" >
                            <FormInput key="old_password" id="old_password" inputType="password" label="Senha Atual:" placeholder="*********" />
                            <FormInput key="new_password" id="new_password" inputType="password" label="Nova Senha:" placeholder="*********" />
                            <FormInput key="confirm_password" id="confirm_password" inputType="password" label="Confirmar Nova Senha:" placeholder="*********" />

                            <div className="mt-5 ">
                                <button type="submit" className={`float-right border-sky-700 border-2 font-semibold text-xs rounded-lg text-sky-700 px-1 py-2 hover:bg-sky-700 hover:text-white w-16`}>Salvar</button>
                                <CancelButton text={"Cancelar"} className="w-16" onClick={onClickButtonCancel}></CancelButton>
                            </div>
                        </form>
                    </FormProvider>
                </div>


            </div>
        </div>
    )
}

export default FormChangePassword