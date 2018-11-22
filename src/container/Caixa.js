import React, { Component } from 'react';
import vermelho from '../img/bolaVermelha.png';
import amarelo from '../img/bolaAmarela.png';
import verde from '../img/bolaVerde.png';
import azul from '../img/bolaAzul.png';
import seta from '../img/setas.png';

export default class Caixa extends Component {
    render() {
        return (
            <div>
                <br />
                <h2>Caixa</h2>
                <br />

                <table class="table table-bordeless table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: '60%' }}>Cliente</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Finalizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td style={{ textAlign: 'center' }}>Cor pedido</td>
                            <td style={{ textAlign: 'center' }}><img src={seta} style={{ width: '30px' }} /></td>
                        </tr>
                    </tbody>
                </table>

                <p> ATENÇÃO: Dirija-se ao caixa quando seu pedido estiver azul. </p>

                <p>Legenda</p>
                <img src={vermelho} style={{ width: '30px' }} /> <span>Pedido Novo</span> <br />
                <img src={amarelo} style={{ width: '30px' }} /> <span>Pedido sendo preparado</span> <br />
                <img src={verde} style={{ width: '30px' }} /> <span>Pedido em conferência</span> <br />
                <img src={azul} style={{ width: '30px' }} /> <span>Pronto para pagamento</span> <br />
            </div >
        );
    }
}