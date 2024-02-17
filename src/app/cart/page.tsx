"use client";

import BookCarousel from "@/components/BookCarousel";
import BooksCarrousel from "@/components/BooksCarrousel";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { ClipLoader } from "react-spinners";

type CartBook = {
  id: number;
  name: string;
  author: string;
  cover_url: string;
  price: number;
};

export default function () {
  const [books, setBooks] = useState<CartBook[] | null>(null);
  const [showPayments, setShowPayments] = useState(false);
  const [recentBooks, setRecentBooks] = useState([]);
  const getRecentsBooks = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/books`
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);

        setRecentBooks(data);
      }
    } catch (error) {
      console.info(error);
    }
  }, []);

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
        console.log(data);
        setBooks(data.id_book);
      } catch {
        console.error("Erro ao buscar Livros do carrinho");
      }
    };
    getBookCarts();
    getRecentsBooks();
  }, []);

  const remove = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/cart/clear/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Livro removido!");
      let newBooks = books?.filter((book) => book.id != id);
      setBooks(newBooks!);
    } catch (error: any) {
      console.error(error.message);
      alert("Erro ao remover livro");
    }
  };

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
      setBooks([]);
    } catch (error: any) {
      console.error(error.message);
      alert("Erro ao remover livro");
    }
  };

  const handlePurchase = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/readers/add_purchase_to_library/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) alert("Compra concluida com sucesso!");
    } catch {
      console.error("Erro ao buscar detalhes do ebook específico.");
    }
  };

  return (
    <div className="w-full">
      <div className="p-6 text-lg">
        <h1>Carrinho de Compras</h1>
      </div>
      <hr />
      {books == null ? (
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
          {books?.map((book, key) => {
            return (
              <CartItem
                key={key}
                author={book.author}
                currentPrice={book.price}
                img={book.cover_url}
                title={book.name}
                id={book.id}
                remove={remove}
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
                        {books?.reduce((acc, curr) => {
                          return acc + curr.price;
                        }, 0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around py-10 text-blue-400 font-semibold">
                  <Link href={"/home"}>ESCOLHER MAIS EBOOKS</Link>
                  <button
                    type="button"
                    onClick={(e) => setShowPayments(!showPayments)}
                  >
                    SEGUIR PARA O PAGAMENTO
                  </button>
                </div>
              </div>
            )}
            {showPayments && (
              <div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col gap-3  max-w-80 mb-6 pt-6">
                    <label htmlFor="payment" className="font-semibold text-sm">
                      Método de pagamento
                    </label>
                    <select className="border-2 rounded-lg p-3 text-sm bg-white">
                      <option value="pix">Pix</option>
                      <option value="credit-card">Cartão de Crédito</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex  gap-16 items-center">
                      <span className="font-medium">Total do carrinho:</span>
                      <div>
                        <span className="mr-2">R$</span>
                        <span>
                          {books?.reduce((acc, curr) => {
                            return acc + curr.price;
                          }, 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around py-10 text-blue-400 font-semibold">
                  <Link href={"/home"}>VOLTAR</Link>
                  <button type="button" onClick={(e) => handlePurchase}>
                    CONCLUIR PAGAMENTO
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <hr />
      <div className="py-12"></div>
    </div>
  );
}
