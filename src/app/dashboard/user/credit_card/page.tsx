import AddCreditCard from "@/components/AddCreditCard";
import CreditCard from "@/components/CreditCard";
import NoCreditCard from "@/components/NoCreditCard";
const Credit_Card = ({ children }: any) => {
    return (
        <div className="flex flex-col justify-start gap-3 w-[70%]">
            <span className="p-5">Cartão de crédito </span>
            <CreditCard cardNumber="4234 5678 9012 3455" />
            <NoCreditCard />
            <AddCreditCard/>
        </div>
    );
};

export default Credit_Card;
