import Image from 'next/image';
import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import unknown from '../../assets/unknown.svg';
import PrimaryButton from "@/components/PrimaryButton";

type CardBrandImageProps = {
    cardNumber: string;
};

const CreditCard: React.FC<CardBrandImageProps> = ({ cardNumber }) => {
    const cardBrand = detectCardBrand(cardNumber);

    return (<>
        <div className="p-6 w-96 h-60 flex flex-col bg-white rounded-lg border border-neutral-600 ml-4" >
            <div className="relative h-full ">
                <div className="w-80 h-9 flex flex-col gap-3">
                    <h1 className="text-black text-base font-semibold">Bandeira {cardBrand}</h1>
                    <h2 className="text-neutral-600 text-base font-semibold">Cartão de crédito terminando em {cardNumber.slice(-4)}</h2>
                    {<div className="">
                        {cardBrand === 'Visa' && (
                            <Image src={visa} alt="Visa Logo" className='w-20 mt-1' />
                        )}
                        {cardBrand === 'Mastercard' && (
                            <Image src={mastercard} alt="Mastercard Logo" className='w-20' />
                        )}
                        {cardBrand === 'Desconhecido' && (
                            <Image src={unknown} alt="Logo Desconhecida" className='w-20' />
                        )}
                    </div>}
                    
                </div>
            </div>
            <div className='flex justify-end'>
            <PrimaryButton text="Remover" className="text-red-600 text-sm font-semibold border-2 border-red-600 
                    h-9 w-20 rounded-md justify-center items-center" onClick={removeCard()} href="credit_card" />
            </div>
           
        </div>

    </>)
};

const detectCardBrand = (cardNumber: string): string => {

    if (cardNumber.startsWith('4')) {
        return 'Visa';
    } else if (cardNumber.startsWith('5')) {
        return 'Mastercard';
    } else {
        return 'Desconhecido';
    }
};
export default CreditCard;


const removeCard = () => {

}