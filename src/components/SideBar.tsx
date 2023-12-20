'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { } from "react";
import { FiBookOpen, FiHome, FiLogOut, FiUpload, FiUser } from "react-icons/fi";



const Sidebar = () => {
    const pathname = usePathname()

    function getClassItem(router: string) {
        return pathname === router ? 'text-decoration-line: underline' : ''
    }

    return (
        <div>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <div className=" ps-2.5 mb-8">
                        <img src="/starbooks.svg" alt="logo" />
                        <span className="text-blue-500 font-medium text-sm mb-5">Usuário</span>
                    </div>
                    <ul className="space-y-3 font-medium">
                        <li key={1}>
                            <Link href="/dashboard/author" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author')}`}>
                                <FiHome size={24} />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/author/books" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/books')}`}>
                                <FiBookOpen size={24} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Livros</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/author/submissions" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/submissions')}`}>
                                <FiUpload size={24} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Submissões</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/author/profile" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/profile')}`}>
                                <FiUser size={24} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Perfil</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/author/logout" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${getClassItem('/dashboard/author/logout')}`}>
                                <FiLogOut size={24} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">

            </div>
        </div>
    );
};

export default Sidebar;