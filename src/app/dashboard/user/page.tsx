'use client'
import { useCallback, useEffect, useState } from "react";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Reader } from "@/app/register/reader/page";

const User = () => {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [birthdate, setBirthdate] = useState<string>('')
    const [gen, setGen] = useState<string>('')
    const [userData, setUserData] = useState<any>({})

    function formattDate(data: Date) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
      }

    const getUserData = useCallback(async () => {
        try {
            const token = localStorage.getItem('token')

            if (token) {
                const decodedToken = jwt.decode(token) as JwtPayload

                if (decodedToken) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}readers/${decodedToken.user_id}`) as Response

                    if (response.ok) {
                        const data = await response.json()

                        setUserData(data)

                        setName(data.first_name)
                        setLastName(data.last_name)
                        setBirthdate(data.birthdate)
                        setCpf(data.cpf)
                        setEmail(data.email)
                        setTelephone(data.phone_number)
                        setGen(data.gender == 'Male' ? 'Masculino' : 'Feminino')
                    }
                }
            }
        } catch (error) {
            console.info(error)
        }
    }, [])

    const saveUserData = async () => {
        try {
            const body: Reader = {
                birthdate: formattDate(new Date(birthdate)),
                card_date: formattDate(new Date(userData.card_date)),
                card_number: userData.card_number,
                cardholder: userData.cardholder,
                cpf: cpf,
                cvv: userData.cvv,
                email: email,
                first_name: name,
                gender: gen,
                last_name: lastName,
                password: userData.password,
                phone_number: telephone,
                username: userData.username
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}readers/${userData.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(body),
                  redirect:"follow"
            })

            if (response.ok) {
                const data = await response.json()

                setUserData(data)
                alert('Dados alterados com sucesso!')
            }
        } catch (error) {
            console.info(error)
        }
    }

    useEffect(() => {
        getUserData()
    }, [getUserData])

    return (
        <div className="w-full flex flex-col gap-12 ml-10 ">
            <h1 className="text-xl font-semibold">Dados pessoais</h1>
            <div className="flex flex-col gap-8">
                <div className="w-[600px] flex flex-col gap-12 flex-wrap border border-[#505050] rounded-lg p-6">
                    <div className="flex gap-4 flex-wrap">
                        <div>
                            <p className="text-md font-semibold">Nome:</p>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">Sobrenome:</p>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">E-mail:</p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">Telefone:</p>
                            <input value={telephone} onChange={(e) => setTelephone(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">CPF:</p>
                            <input value={cpf} onChange={(e) => setCpf(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">Data de nascimento:</p>
                            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">Gênero:</p>
                            <select value={gen} onChange={(e) => setGen(e.target.value)} className="border border-gray-600 outline-none p-1 rounded-md">
                                <option value='Masculino'>Masculino</option>
                                <option value='Feminino'>Feminino</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={saveUserData} className="self-end w-[100px] p-1 border text-[#246590] border-[#246590]">Salvar</button>
                </div>
            </div>
        </div>
    );
};

export default User;
