import Image from 'next/image';
import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import unknown from '../../assets/unknown.svg';
import PrimaryButton from "@/components/PrimaryButton";
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

type CardBrandImageProps = {
    cardNumber: string;
};

interface User {
    password: string | null,
    last_login: Date | null,
    is_superuser: boolean | null,
    is_staff: boolean | null,
    is_active: boolean | null,
    date_joined: Date | null,
    username: string | null,
    first_name: string | null,
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

const CreditCard: React.FC<CardBrandImageProps> = ({ cardNumber }) => {
    const cardBrand = detectCardBrand(cardNumber);

    const removeCard = () => {
        console.log('remover cartão');
        return ;
    }

    const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND;

  const [userToken, setUserToken] = useState<any>('');
  const [user, setUser] = useState<any>();

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
          const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/`);
          const data = await response.json();
          setUser(data);
        } catch {
          console.error('Erro ao buscar as compras do leitor.');
        }
      };
      fetchUser();
    }
  }, [userToken?.user_id]);
  
    return (<>
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

    </>)
};

const detectCardBrand = (cardNumber: string): string => {

    if (cardNumber.startsWith('4')) {
        return 'Visa';
    } else if (cardNumber.startsWith('5')) {
        return 'Mastercard';
    } else {
        return 'Desconhecido';
    }
};
export default CreditCard;




