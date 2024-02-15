import Link from "next/link";
import { FiPlusSquare } from "react-icons/fi";

const NoCreditCard = () => {
    return (<>
        <div className="p-6 flex justify-center items-center  w-96 h-60  bg-white rounded-lg border border-neutral-600 ml-4" >
            <Link href="/dashboard/user/credit_card/add" className="gap-3 flex justify-center text-xl text-cyan-600 font-semibold font-['Inter']">  <FiPlusSquare size={30} /> Adicionar cartão</Link>
        </div>
    </>)
};

export default NoCreditCard;