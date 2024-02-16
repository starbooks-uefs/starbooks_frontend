"use client"

import BookCarousel from "@/components/BookCarousel";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import { useEffect, useState } from "react";

type Cart = {
    id_reader:number,
    id_book:CartBook[]
    
}
type CartBook ={
    id:number,
    name:string,
    author:string,
    cover_url:string,
    price:number
    
}

export default function(){
    const [cart, setCart] = useState<Cart | null>(null)
    const [showPayments, setShowPayments] = useState(false)

    useEffect(()=>{
        const getBookCarts = async () => {
            try {
                const response = await fetch(`https://starbooks-backend-uw7b.onrender.com/api/cart/retrieve`,{
                    headers:{
                        "Authorization":`Bearer ${localStorage.getItem('token')}`
                    }
                })
                const data = await response.json()
                setCart(data)
            } catch {
                console.error("Erro ao buscar Livros do carrinho")
            }
        }
        getBookCarts()
    },[])

    const handlePurchase = async () => {
        try {
            const response = await fetch(`/api/readers/add_purchase_to_library/`,{
                headers:{
                    "Authorization":`${localStorage.getItem('token')}`
                }
            })
            const data = await response.json()
            if(response.ok)
                alert("Compra concluida com sucesso!")
        } catch {
            console.error("Erro ao buscar detalhes do ebook específico.")
        }
    }

    return <div className="w-full">
        <div className="p-6 text-lg"><h1>Carrinho de Compras</h1></div>
        <hr />
        <div className="mt-3 grid grid-cols-3 p-6 justify-items-center font-medium">
            <span>Livro</span>
            <span>Valor atual</span>
            <span>Ações</span>
        </div>
        <hr/>
        {
            cart?.id_book.map((book,key) => {return <CartItem key={key} author={book.author} currentPrice={book.price}  img={book.cover_url} title={book.name} deleteLink=""/>})
        }
        
        <div className="px-6">
            <hr />
            {!showPayments &&
            <div>
                <div className="flex gap-3 justify-between items-center pt-6">
                    <div><Link className="flex justify-center items-center hover:text-red-500" href={"#"}>Excluir Tudo</Link></div>
                    <div className="flex  gap-16 items-center">
                        <span className="font-medium">Total do carrinho:</span>
                        <div>
                            <span className="mr-2">R$</span>
                            <span>{cart?.id_book.reduce((acc,curr)=>{return (acc + curr.price)},0)}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around py-10 text-blue-400 font-semibold">
                    <Link href={"/home"}>ESCOLHER MAIS EBOOKS</Link>
                    <button type="button" onClick={(e)=>setShowPayments(!showPayments)}>SEGUIR PARA O PAGAMENTO</button>
                </div>
            </div>
            }
            {showPayments && 
                <div>
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col gap-3  max-w-80 mb-6 pt-6">
                            <label htmlFor="payment" className="font-semibold text-sm" >Método de pagamento</label>
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
                                    <span>{cart?.id_book.reduce((acc,curr)=>{return (acc + curr.price)},0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around py-10 text-blue-400 font-semibold">
                        <Link href={"/home"}>VOLTAR</Link>
                        <button type="button" onClick={(e) =>handlePurchase}>CONCLUIR PAGAMENTO</button>
                    </div>
                </div>
                
            }
        </div>
        <hr />
        <div className="py-6">
            <h3 className="font-semibold mb-3">Ofertas</h3>
            <BookCarousel author="George R.R Martin"  currentPrice={55.55} href={""} id={0} img="https://m.media-amazon.com/images/I/91+1SUO3vUL._AC_UF1000,1000_QL80_.jpg" title="Game of Thrones" />
        </div>
    </div>
    
}