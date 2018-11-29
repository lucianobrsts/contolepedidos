import React from 'react';
import vermelho from '../img/bolaVermelha.png';
import amarelo from '../img/bolaAmarela.png';
import verde from '../img/bolaVerde.png';
import azul from '../img/bolaAzul.png';

const Legenda = () => {
    return (
        <div>
            <p> ATENÇÃO: Dirija-se ao caixa quando seu pedido estiver azul. </p>
            <p>Legenda</p>
            <img src={vermelho} alt="Pedido novo" /> <span>Pedido Novo</span> <br />
            <img src={amarelo} alt="Pedido sendo preparado" /> <span>Pedido sendo preparado</span> <br />
            <img src={verde} alt="Pedido em conferência" /> <span>Pedido em conferência</span> <br />
            <img src={azul} alt="Pronto para pagamento" /> <span>Pronto para pagamento</span> <br />
        </div>
    );
}

export default Legenda