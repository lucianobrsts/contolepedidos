import React, { Component } from 'react';
import vermelho from '../img/bolaVermelha.png';
import amarelo from '../img/bolaAmarela.png';
import verde from '../img/bolaVerde.png';
import azul from '../img/bolaAzul.png';

export default class Legenda extends Component {
    render() {
        return (
            <div>
                <hr />
                <p> ATENÇÃO: Dirija-se ao caixa quando seu pedido estiver azul. </p>
                <p>Legenda</p>
                <img src={vermelho} style={{ width: '30px' }} /> <span>Pedido Novo</span> <br />
                <img src={amarelo} style={{ width: '30px' }} /> <span>Pedido sendo preparado</span> <br />
                <img src={verde} style={{ width: '30px' }} /> <span>Pedido em conferência</span> <br />
                <img src={azul} style={{ width: '30px' }} /> <span>Pronto para pagamento</span> <br />
            </div>
        );
    }
}