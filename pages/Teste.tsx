import Button from "@/app/components/Button";
import React from 'react';

const Teste: React.FC = () => {
    return (
        <div>
            <div>Olá mundo teste</div>
            <Button primary onClick={() => console.log('Botão primário')}>
                <p className="text-black"> Clique aqui (Primário) </p>
            </Button>
            <Button secondary onClick={() => console.log('Botão secundário')}>
                Clique aqui (Secundário)
            </Button>
        </div>
    );
};

export default Teste;
