import Button from "@/app/components/Button";
import React from 'react';

const tes: React.FC = () => {
    return (
        <div>
            <div>Olá mundo teste</div>
            <Button primary onClick={() => console.log('Botão primário')}>
               Clique aqui (Primário)
            </Button>
            <Button secondary onClick={() => console.log('Botão secundário')}>
                Clique aqui (Secundário)
            </Button>
        </div>
    );
};

export default tes;
