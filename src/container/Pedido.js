import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import seta from '../img/setas.png';

export default class Pedido extends Component {
    render() {
        return (
            <div>
                <br />
                <h2>Acompanhamento de Pedidos</h2>
                <br />

                <table class="table table-bordeless table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: '60%' }}>Cliente</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Tempo de Espera</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Luciano Brito</th>
                            <td style={{ textAlign: 'center' }}>Cor pedido</td>
                            <td style={{ textAlign: 'center' }}><img src={seta} style={{ width: '30px' }} /></td>
                        </tr>
                    </tbody>
                </table>

                <Legenda />

            </div >
        );
    }
}