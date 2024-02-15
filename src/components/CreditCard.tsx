"use client";

import Image from 'next/image';
import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import unknown from '../../assets/unknown.svg';
import PrimaryButton from "@/components/PrimaryButton";
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';
import { Reader } from '@/app/register/reader/page';


type CardBrandImageProps = {
  cardNumber: string;
};


const CreditCard = ({ cardNumber }: { cardNumber: string }) => {

  const cardBrand = detectCardBrand(cardNumber);
  const router = useRouter();

  const [userToken, setUserToken] = useState<any>('');
  const [user, setUser] = useState<Reader | null>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      if (token) {
        setUserToken(jwt.decode(token));
      }
    } catch {
      console.error('Erro ao decodificar o token.');
    }
  }, []);

  useEffect(() => {
    if (userToken?.user_id) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/`) as Response;
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          }
        } catch {
          console.error('Erro ao buscar as compras do leitor.');
        }
      };
      fetchUser();


    }
  }, [userToken?.user_id]);

  const removeCard = async () => {
    if (user) {
      try {
        user.birthdate = formattDate(new Date(user.birthdate));
        user.card_date = formattDate(new Date("01-01-1800"));
        console.log(user.card_date);
        user.card_number = '';
        user.cvv = "0";
        user.cardholder = '';

        const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        const data = await response.json();
        setUser(data);
        alert("Cartão removido com sucesso!")
        router.push('/dashboard/user/');
      } catch {
        console.error('Erro ao alterar cartao.');
      }
    }
  }


  return (
    <>
      <div className="p-6 w-96 h-60 flex flex-col bg-white rounded-lg border border-neutral-600 ml-4" >
        <div className="relative h-full ">
          <div className="w-80 h-9 flex flex-col gap-3">
            <h1 className="text-black text-base font-semibold">Bandeira {cardBrand}</h1>
            <h2 className="text-neutral-600 text-base font-semibold">Cartão de crédito terminando em {cardNumber.slice(-4)}</h2>
            {<div className="">
              {cardBrand === 'Visa' && (
                <Image src={visa} alt="Visa Logo" className='w-20 mt-1' />
              )}
              {cardBrand === 'Mastercard' && (
                <Image src={mastercard} alt="Mastercard Logo" className='w-20' />
              )}
              {cardBrand === 'Desconhecido' && (
                <Image src={unknown} alt="Logo Desconhecida" className='w-20' />
              )}
            </div>}

          </div>
        </div>
        <div className='flex justify-end'>
          <PrimaryButton text="Remover" className="text-red-600 text-sm font-semibold border-2 border-red-600 
                    h-9 w-20 rounded-md justify-center items-center" onClick={removeCard} href="credit_card" />
        </div>

      </div>
    </>
  )
};
const detectCardBrand = (cardNumber: string): string => {
  if (cardNumber && cardNumber.startsWith('4')) {
    return 'Visa';
  } else if (cardNumber && cardNumber.startsWith('5')) {
    return 'Mastercard';
  } else {
    return 'Desconhecido';
  }
};

function formattDate(data: Date) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}



export default CreditCard;




