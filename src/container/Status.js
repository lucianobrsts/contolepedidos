import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import seta from '../img/setas.png';

export default class Status extends Component {
    render() {
        return (
            <div>
                <br />
                <h2>Avançar Status do Pedido</h2>
                <br />

                <table class="table table-bordeless table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: '60%' }}>Cliente</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Ações</th>
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