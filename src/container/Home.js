import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component {
    homeCardCadastro = {
        title: 'Cadastro',
        text: 'Cadastre pedidos de clientes clicando no batão baixo.',
        action: () => alert('Cadastro clicado')
    }

    homeCardStatus = {
        title: 'Status',
        text: 'Verifique o status dos pedidos clicando no botão abaixo.',
        action: () => alert('Status clicado')
    }

    homeCardAcompanhamentoPedidos = {
        title: 'Pedidos',
        text: 'Acompanhe os pedidos em espera clicando no batão baixo.',
        action: () => alert('Acompanhamento clicado')
    }

    homeCardCaixa = {
        title: 'Caixa',
        text: 'Faça Pagamentos de pedidos clicando no batão baixo.',
        action: () => alert('Caixa clicado')
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