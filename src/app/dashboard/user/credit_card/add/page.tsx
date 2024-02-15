import AddCreditCard from "@/components/AddCreditCard";

const Add_Credit_Card = ({ children }: any) => {
    return (
        <div className="flex flex-col justify-start gap-3 w-[70%]">
            <span className="px-5 py-2 font-semibold">Cartão de crédito </span>
            <AddCreditCard />
        </div>
    );
};

export default Add_Credit_Card;