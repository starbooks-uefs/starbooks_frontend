"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiCalendar, FiCreditCard, FiLock, FiUser } from 'react-icons/fi';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

type User = {
  password: string | null;
  last_login: Date | null;
  is_superuser: boolean | null;
  is_staff: boolean | null;
  is_active: boolean | null;
  date_joined: Date | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  birthdate: Date | null;
  phone_number: string | null;
  cpf: string | null;
  gender: string | null;
  cardholder: string | null;
  cvv: null;
  card_number: number | null;
  card_date: Date | null;
  groups: [] | null;
  user_permissions: [] | null;
};

const AddCreditCard: React.FC = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    cvv: '',
    date: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const validateFormData = () => {
    let errorMessages = '';

    let isValid = true;
    const isNumeric = (value: string) => /^\d+$/.test(value);

    // Validation for credit card number (12 digits and numeric)
    if (formData.number.length != 16 || !isNumeric(formData.number)) {
      errorMessages += 'Número do cartão inválido.';
      console.log(formData.number.length)
      isValid = false;
    }

    // Validation for CVV (3 digits and numeric)
    if (formData.cvv.length !== 3 || !isNumeric(formData.cvv)) {
      errorMessages += 'CVV inválido.';
      isValid = false;
    }

    // Validation for future date
    const currentDate = new Date();
    const inputDate = new Date(formData.date);


    if (inputDate <= currentDate) {
      errorMessages += 'Data de validade inválida. Deve ser uma data futura.';
      isValid = false;
    }
    if (formData.name === '') {
      isValid = false;
      errorMessages += 'Nome do cartão inválido.';
    }

    // All validations passed
    setErrorMessage(errorMessages);
    return isValid;
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFormData()) {
      console.error('Validation failed.');
      return false;
    } else {
      user.card_number = formData.number;
      user.cvv = formData.cvv;
      user.card_date = converterFormatoData(formData.date);
      user.birthdate = converterFormatoData(user.birthdate);
      user.cardholder = formData.name;

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/readers/${userToken.user_id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        const data = await response.json();
        setUser(data);
        //console.log('cartao alterado com sucesso!');
        alert("Cartão alterado com sucesso!")
        router.push('/dashboard/user/credit_card');
      } catch {
        console.error('Erro ao alterar cartao.');
      }
    }
    setIsLoading(true);
    // Adicione aqui a lógica para enviar os dados do cartão para o backend
  };

  return (
    <div className="px-3 flex-col items-center justify-center w-fit rounded-lg border border-neutral-600 ml-4">
      <form onSubmit={handleSubmit}>
        <h1 className="py-3 flex justify-center text-xl text-black font-bold font-['Inter'] ">Adicione seu cartão</h1>
        {errorMessage && <p className="text-red-500 text-center flex flex-col w-fit">{errorMessage}</p>}
        <div className='flex gap-2.5 justify-center'>
          <div className='flex flex-col justify-center'>
            <label className="text-black font-semibold font-['Inter'] px-1"> Nome do Titular </label>
            <div className='flex gap-2 items-center'>
              <FiUser size={25} className="inline-block" />
              <input className="h-8 bg-white rounded border border-neutral-600 justify-start items-center gap-2.5 inline-flex"
                type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Nome do titular' />
            </div>
          </div>

          <div>
            <label className="text-black font-semibold font-['Inter'] px-1">CVV </label>
            <div className='flex gap-2 items-center'>
              <FiLock size={25} />
              <input className="h-8 w-28 px-1.5 bg-white rounded border border-neutral-600 justify-start items-center gap-2.5 inline-flex"
                type="number" placeholder='123' name="cvv" value={formData.cvv} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className='flex gap-2.5 justify-center'>
          <div>
            <label className="text-black font-semibold font-['Inter']">Número do Cartão </label>
            <div className='flex gap-2 items-center'>
              <FiCreditCard size={25} />
              <input className="h-8 bg-white rounded border border-neutral-600 justify-start items-center gap-2.5 inline-flex"
                type="number" name="number" value={formData.number} onChange={handleChange} placeholder='Nº do cartão de crédito' />
            </div>

          </div>

          <div>
            <label className="text-black font-semibold font-['Inter'] px-1">Data de Validade </label>
            <div className='flex gap-2 items-center'>
              <FiCalendar size={25} />
              <input className="w-28 h-9 px-1.5 bg-white rounded border border-neutral-600 justify-start items-center gap-2.5 inline-flex"
                type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
          </div>

        </div>

        <div className='flex justify-between items-center gap-5 px-8 py-3'>
          <button
            className="w-40 h-9 p-2 bg-blue-400 rounded-lg flex-col justify-center items-center inline-flex text-white text-xl 
          font-medium font-['Inter']"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Adicionando...' : 'Adicionar'}
          </button>
          <Link
            href="/dashboard/user/credit_card"
            className="w-40 h-9 p-2 bg-white rounded-lg border border-blue-400 flex-col justify-center items-center inline-flex
           text-blue-400 text-xl font-medium font-['Inter']"
            type="button">Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};


const converterFormatoData = (dataString: string): string => {
  // Divida a string da data nos componentes ano, mês e dia
  const [ano, mes, dia] = dataString.split('-');

  // Crie um objeto Date
  const data = new Date(Number(ano), Number(mes) - 1, Number(dia));

  // Função para formatar a data como DD-MM-YYYY
  const formatarDataBrasil = (data: Date): string => {
    const dd = String(data.getDate()).padStart(2, '0');
    const mm = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const aaaa = String(data.getFullYear());

    return `${dd}-${mm}-${aaaa}`;
  };

  // Retorne a data formatada
  return formatarDataBrasil(data);
};

export default AddCreditCard;
