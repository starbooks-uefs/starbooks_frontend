"use client"

// pages/add-credit-card.tsx

import Link from 'next/link';
import { useState } from 'react';
import { FiCalendar, FiCreditCard, FiLock, FiUser } from "react-icons/fi";

const AddCreditCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    cvv: '',
    date: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/readers/{user_id}/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o cartão de crédito');
      }
      setFormData({
        name: '',
        number: '',
        cvv: '',
        date: '',
      });


    } catch (error) {
      console.error('Erro ao adicionar o cartão de crédito', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-3 flex-col items-center justify-center w-[43%] rounded-lg border border-neutral-600 ml-4">
      <form onSubmit={handleSubmit}>
        <h1 className="py-3 flex justify-center text-xl text-black font-bold font-['Inter'] ">Adicione seu cartão</h1>
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
              type="button"
            >
              Cancelar
            </Link>
          </div>
        </form>
    </div>
  );
};

export default AddCreditCard;
