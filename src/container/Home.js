import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {
    homeCardCadastro = {
        title: 'Cadastro',
        text: 'Cadastrar pedidos.',
        alt: 'Cadastro',
        action: () => hashHistory.push('/cadastro')
    }

    homeCardStatus = {
        title: 'Status',
        text: 'Verificar status.',
        alt: 'Status',
        action: () => hashHistory.push('/status')
    }

    homeCardAcompanhamentoPedidos = {
        title: 'Pedidos',
        text: 'Acompanhar pedidos.',
        alt: 'Pedido',
        action: () => hashHistory.push('/pedido')
    }

    homeCardCaixa = {
        title: 'Caixa',
        text: 'Fazer pagamentos.',
        alt: 'Pagamento',
        action: () => hashHistory.push('/caixa')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row mt-5 justify-content-between">
                    <HomeCard {...this.homeCardCadastro} />
                    <HomeCard {...this.homeCardStatus} />
                    <HomeCard {...this.homeCardAcompanhamentoPedidos} />
                    <HomeCard {...this.homeCardCaixa} />
                </div>
            </div>
        )
    }
}