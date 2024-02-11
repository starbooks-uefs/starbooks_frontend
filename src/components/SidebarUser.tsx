'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { } from "react";
import { FiBookOpen, FiFileText, FiLogOut, FiCreditCard, FiUser, FiLock } from "react-icons/fi";

const SidebarUser = ({ imagePath: imagePath }: { imagePath?: any }) => {
    
    

    const pathname = usePathname()
    
    function getClassItem(router: string) {
        return pathname === router ? 'text-decoration-line: underline' : ''
    }
    return (
        <div>
            <aside id="default-sidebar" className="w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-white ">
                    <div className=" ps-2.5 mb-8 flex flex-col mx-auto items-center p-2">
                        <div className="w-24 h-24 relative">
                            <FiUser color="white" className="w-24 h-24 left-0 top-0 absolute bg-bg-blue rounded-full p-3"/>              
                            <div className="w-16 h-16 px-3 py-2 left-[12.68px] top-[12.68px] absolute flex-col justify-center items-center gap-3 inline-flex" />
                        </div>
                        <span className="text-gray-900 font-medium text-sm mb-5 p-3">Olá Usuário</span>
                    </div>
                    <ul className="space-y-3 font-medium">
                        <li key={1}>
                            <Link href="/dashboard/user/" className={`flex flex-col p-2 text-gray-900 rounded-lg white:text-dark  hover:text-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author')}`}>
                                <div className="flex p-1">
                                    <FiUser size={24} />
                                    <span className="ms-3">Dados Pessoais</span>
                                </div>
                                <div className="w-full border border-gray-900"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/user/books" className={`flex flex-col  p-2 text-gray-900 rounded-lg hover:text-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/books')}`}>
                                <div className="flex p-1">
                                    <FiBookOpen size={24} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Livros</span>
                                </div>
                                <div className="w-full border border-gray-900"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/user/order" className={`flex flex-col p-2 text-gray-900 rounded-lg hover:text-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/submissions')}`}>
                                <div className="flex p-1">
                                    <FiFileText size={24} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Pedidos</span>
                                </div>
                                <div className="w-full border border-gray-900"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/user/credit_card" className={`flex flex-col p-2 text-gray-900 rounded-lg hover:text-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/profile')}`}>
                                <div className="flex p-1">
                                    <FiCreditCard size={24} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Cartão de Crédito</span>
                                </div>
                                <div className="w-full border border-gray-900"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/user/authentication" className={`flex flex-col p-2 text-gray-900 rounded-lg hover:text-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/profile')}`}>
                                <div className="flex p-1">
                                    <FiLock size={24} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Autenticação</span>
                                </div>
                                <div className="w-full border border-gray-900"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={`flex flex-col p-2 text-gray-900 rounded-lg hover:text-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/logout')}`}>
                                <div className="flex p-1">
                                    <FiLogOut size={24} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sair</span>
                                </div>
                                <div className="w-full border border-gray-900"></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default SidebarUser;