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
                <img src={vermelho} alt="Pedido novo"/> <span style={{paddingRight: '100px'}}>Pedido Novo</span>
                <img src={amarelo} alt="Pedido sendo preparado"/> <span style={{paddingRight: '100px'}}>Pedido sendo preparado</span>
                <img src={verde} alt="Pedido em conferência"/> <span style={{paddingRight: '100px'}}>Pedido em conferência</span>
                <img src={azul} alt="Pronto para pagamento"/> <span style={{paddingRight: '100px'}}>Pronto para pagamento</span>
            </div>
        );
    }
}