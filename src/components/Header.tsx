

export default function Header() {
    return (
        <div className="w-[100%] h-[50px] px-32 py-4 bg-blue-400 justify-between items-start inline-flex">
            <div className="justify-center items-center flex">
                <div className="text-white text-sm font-medium">Comprar e vender e-books nunca foi tão fácil!</div>
            </div>
            <div className="justify-start items-center flex">
                <div className="px-2 justify-start items-start gap-2.5 flex">
                    <div className="text-white text-xs font-medium hover:cursor-pointer">Quero vender</div>
                </div>
                <div className="px-2 justify-center items-center flex">
                    <div className="text-white text-xs font-medium hover:cursor-pointer">Quem somos</div>
                </div>
                <div className="px-2 justify-center items-center flex">
                    <div className="text-white text-xs font-medium hover:cursor-pointer">Central de ajuda</div>
                </div>
            </div>
        </div>)
}
