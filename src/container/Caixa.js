import React, { Component } from 'react';
import Legenda from '../ui/Legenda'
import excluirPedido from '../img/excluir.png';
import axios from 'axios';
import dbjson from '../temp/db.json'

const API_URL = 'http://localhost:3000/pedidos';

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
                        {dbjson.pedidos.map((pedido, index) => {
                            return (
                                < tr key={pedido.id}>
                                    <th scope="row">{pedido.nome}</th>
                                    <td style={{ textAlign: 'center' }}>{pedido.status}</td>
                                    <td style={{ textAlign: 'center' }}><img src={excluirPedido} style={{ width: '30px' }} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Legenda />
            </div >
        );
    }
}