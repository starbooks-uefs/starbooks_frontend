import FooterText from "./FooterText";
import PrimaryButton from "./PrimaryButton";

export default function Footer() {
  return (
    <div className='h-80 flex flex-col items-center justify-center w-full bg-bg-blue'>
      {/* Div do botão */}
      {/* <div className='w-4/5 h-8 mb-10 rounded-lg bg-black text-white'>
        <PrimaryButton className="w-full bg-blueBtnFooter font-normal rounded-lg text-white px-2 py-1" text="Voltar ao topo" />
      </div> */}
      {/* Div dos textos */}
      <div className='flex w-4/5 justify-between text-white text-sm'>
        {/* Colunas */}
        <FooterText 
          title="Ajuda"
          firstTopic="Fale conosco"
          secondTopic="Termos de uso do comprador"
        />
        <FooterText 
          title="Formas de pagamento"
          firstTopic="Cartão de crédito"
          secondTopic="Pix"
        />
        <FooterText 
          title="Sobre a empresa"
          firstTopic="Quem somos"
          secondTopic={null}
        />
        <FooterText 
          title="Ganhar dinheiro na plataforma"
          firstTopic="Quero ser vendedor"
          secondTopic={null}
        />
      </div>
      <div className='w-4/5 mt-10'>
        <hr className='border-t-2 border-t-white' />
      </div>
      
      {/* Div do logo */}
      <div className='flex flex-row items-center justify-between mt-4 w-4/5'>
        <div className='flex-none'>
          <img src="/starbooks-white.svg" alt="logo" className='w-40 h-30' />
        </div>
        <div className='text-white text-sm'>
          <h1>StarBooks © - Todos os direitos reservados</h1>
        </div>
      </div>
    </div>
  )
}