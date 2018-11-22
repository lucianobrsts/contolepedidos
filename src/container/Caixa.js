import React, { Component } from 'react';
import Legenda from '../ui/Legenda'
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

                <Legenda />
                
            </div >
        );
    }
}