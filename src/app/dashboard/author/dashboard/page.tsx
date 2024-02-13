import Sidebar from "@/components/SideBar";
import { LuCalendarSearch } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import BlueField from "@/components/BlueField";
import { GoDotFill } from "react-icons/go";

type dashboardGJson = {
    nameBestSellingBook:string;
    authorName:string;
    viewsBestBook:string;
    salesBestBook:string;
    totalViews:string;
    salesAmount:string;
}

const Dashboard = ({ children }: any) => {
    return (
        <div className="flex">
            <Sidebar/>
            {/*Dashboard*/}
            <main className=" flex-1 p-8">
                    <div className="flex flex-col p-5">

                        <header className="flex items-center border-b border-zinc-100 h-12 p-4">
                                <h1 className="text-zinc-300 text-xs">Dashboard /</h1>
                                <a className="relative flex bg-zinc-200 rounded-lg text-zinc-400 text-xs p-1 ml-auto mr-10">
                                    <CiSearch className="h-3.5 "/>
                                    <input type="text" className="w-20 pl-2 text-xm bg-zinc-200" placeholder="Search"/>
                                </a>
                        </header>

                        {/*Métricas de um livro esecífico*/}
                            
                        <h3 className="flex items-center font-semibold text-blue-300 mt-4 text-xs "><GoDotFill className="h-3"/>Destaques</h3>
                        <section className="flex p-6 h-76">
                            <div className="flex items-center  mx-20 flex-col justify-center items-center gap-0.5 inline-flex hover:cursor-pointer">
                                <img src="https://assets.visme.co/templates/banners/thumbnails/i_Illustration-Book-Cover_full.jpg" className="h-52" alt="" />
                                <div className="w-40 text-center text-neutral-800 text-base font-semibold">The Human Memory</div>
                                <div className="text-center text-neutral-500 text-xs font-normal">Dr. Mildred S. Dresselhaus</div>
                            </div>
                            <div className="flex flex-1 grid grid-cols-2 gap-10 p-5">
                                <BlueField title="Vendas Totais" value="777k" variation="-20" />
                                <BlueField title="Métrica" value="777k" variation="-20"/>
                                <BlueField title="Visualizações totais" value="777k" variation="-20"/>
                                <BlueField title="Métrica" value="777k" variation="-20"/>
                            </div>
                        </section>

                        {/*Métricas gerais*/}
                        <h3 className="flex items-center font-semibold text-blue-300 mt-4 text-xs "><GoDotFill className="h-3"/>Métricas</h3>
                        <button className="flex items-center rounded-lg border border-gray-600 w-20 my-4 text-gray-600">
                            <LuCalendarSearch className="h-3"/>
                            Hoje
                            <FaChevronDown className="h-3"/>
                        </button>

                        <section className="">
                            <div className="grid grid-cols-4 gap-4">
                                <BlueField title="Vendas Totais" value="777k" variation="-20" />
                                <BlueField title="Visualizações totais" value="777k" variation="-20"/>
                                <BlueField title="Métrica" value="777k" variation="-20"/>
                                <BlueField title="Métrica" value="777k" variation="-20"/>
                            </div>
                    </section>
                </div>
            </main>
        </div>
    );
};
export default Dashboard;
