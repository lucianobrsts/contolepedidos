import React, { Component } from 'react';

export default class Caixa extends Component {
    render() {
        return (
            <form>
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
                            <td style={{ textAlign: 'center' }}><button className="btn btn-primary" /></td>
                        </tr>
                    </tbody>
                </table>

                <ul class="list-unstyled">
                    <li>Legenda</li>
                    <ul>
                        <li>Pedido novo</li>
                        <li>Pedido sendo preparado</li>
                        <li>Pedido em conferência</li>
                        <li>Pronto para paragamento</li>
                    </ul>
                </ul>
            </form >
        )
    }
}