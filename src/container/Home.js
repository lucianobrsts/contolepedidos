import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';

export default class Home extends Component {
    homeCardCadastro = {
        img: 'cadastro3',
        title: 'Cadastro',
        text: 'Cadastrar pedidos.',
        alt: 'Cadastro de pedidos.',
        action: () => hashHistory.push('/cadastro')
    }

    homeCardStatus = {
        img: 'status',
        title: 'Status',
        text: 'Verificar status.',
        alt: 'Status do pedido.',
        action: () => hashHistory.push('/status')
    }

    homeCardAcompanhamentoPedidos = {
        img: 'controlePedido',
        title: 'Pedidos',
        text: 'Acompanhar pedidos.',
        alt: 'Pedidos.',
        action: () => hashHistory.push('/pedido')
    }

    homeCardCaixa = {
        img: 'caixa',
        title: 'Caixa',
        text: 'Fazer pagamentos.',
        alt: 'Pagamentos',
        action: () => hashHistory.push('/caixa')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardCadastro}/>
                    <HomeCard {...this.homeCardStatus}/>
                    <HomeCard {...this.homeCardAcompanhamentoPedidos}/>
                    <HomeCard {...this.homeCardCaixa}/>
                </div>
            </div>
        )
    }
}