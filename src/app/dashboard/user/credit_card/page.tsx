"use client"
import CreditCard from "@/components/CreditCard";
import NoCreditCard from "@/components/NoCreditCard";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";


interface User {
    password: string | null,
      last_login: Date | null,
      is_superuser : boolean | null,
      is_staff : boolean | null,
      is_active : boolean | null,
      date_joined: Date | null,
      username : string | null,
      first_name : string | null,
      last_name: string | null,
      email: string | null,
      birthdate: Date | null,
      phone_number: string | null,
      cpf: string | null,
      gender: string | null,
      cardholder: string | null,
      cvv: null,
      card_number: number | null,
      card_date: Date | null,
      groups: [] | null,
      user_permissions: [] | null,
  }

const Credit_Card = ({ children }: any) => {
    const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND;

    const [userToken, setUserToken] = useState<any>('')
    const [user, setUser] = useState<User>()
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
        if (userToken?.user_id) {
            const fetchUser = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/`)
                    const data = await response.json()
                    setUser(data)
                } catch {
                    console.error("Erro ao buscar as compras do leitor.")
                }
            }
            fetchUser()
        }
    }, [userToken?.user_id])

    return (
        <div className="flex flex-col justify-start gap-3 w-[70%]">
            <span className="px-5 py-2 font-semibold">Cartão de crédito </span>
            {user?.card_number ?<CreditCard cardNumber={user.card_number.toString() }/> : <NoCreditCard />}           
        </div>
    );

};
export default Credit_Card;

