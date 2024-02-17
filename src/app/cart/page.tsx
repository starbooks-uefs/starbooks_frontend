"use client";

import CartItem from "@/components/CartItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Cart = {
  id_reader:number,
  id_book:CartBook[]
}

type CartBook = {
  id: number;
  name: string;
  author: string;
  cover_url: string;
  price: number;
};

export default function () {
  const [cart, setCart] = useState<Cart | null>(null);
  const [showPayments, setShowPayments] = useState(false);

  useEffect(() => {
    const getBookCarts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_BACKEND}/cart/retrieve`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setCart(data);
      } catch {
        console.error("Erro ao buscar Livros do carrinho");
      }
    };
    getBookCarts();
  }, []);

  const remove = async (id: number) => {
    try {
      handleRemove(id)
      alert("Livro removido!")
    } catch (error: any) {
      console.error(error.message);
      alert("Erro ao remover livro");
    }
  };

  const handleRemove = async(id:number) =>{
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/cart/clear/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      
      let newCart:Cart = {
        id_reader:cart!.id_reader,
        id_book:cart!.id_book?.filter((book) => book.id != id)
      }
      setCart(newCart!);
  }

  const removeAll = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/cart/clear/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Livros removidos!");
      setCart(null);
    } catch (error: any) {
      console.error(error.message);
      alert("Erro ao remover livro");
    }
  };

  const handlePurchase = async (idReader: number, idBook: number) => {
    try {
      type purchaseProps = {
        id_reader: number;
        id_book: number;
      };

      const purchase: purchaseProps = {
        id_book: idBook,
        id_reader: idReader,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/readers/add_purchase_to_library/`,
        {
          method: "POST",
          body: JSON.stringify(purchase),
          headers: {
            'Content-Type': 'application/json'
            },
        }
      );
      alert("Compra concluida com sucesso! O livro está em sua biblioteca");
      handleRemove(idBook)
      
    } catch {
      console.error("Error ao efetuar compra");
    }
  };

  return (
    <div className="w-full">
      <div className="p-6 text-lg">
        <h1>Carrinho de Compras</h1>
      </div>
      <hr />
      {cart == null ? (
        <div className="p-6 flex justify-center">
          <ClipLoader />
        </div>
      ) : (
        <div>
          <div className="mt-3 grid grid-cols-3 p-6 justify-items-center font-medium">
            <span>Livro</span>
            <span>Valor atual</span>
            <span>Ações</span>
          </div>
          <hr />
          {cart?.id_book.map((book, key) => {
            return (
              <CartItem
                key={key}
                author={book.author}
                currentPrice={book.price}
                img={book.cover_url}
                title={book.name}
                id={book.id}
                idReader={cart.id_reader}
                remove={remove}
                purchase={handlePurchase}
              />
            );
          })}

          <div className="px-6">
            <hr />
            {!showPayments && (
              <div>
                <div className="flex gap-3 justify-between items-center pt-6">
                  <div>
                    <button
                      className="flex justify-center items-center hover:text-red-500"
                      onClick={removeAll}
                    >
                      Excluir Tudo
                    </button>
                  </div>
                  <div className="flex  gap-16 items-center">
                    <span className="font-medium">Total do carrinho:</span>
                    <div>
                      <span className="mr-2">R$</span>
                      <span>
                        {cart?.id_book.reduce((acc, curr) => {
                          return acc + curr.price;
                        }, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="py-12"></div>
    </div>
  );
}
