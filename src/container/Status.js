import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import axios from 'axios';
import dbjson from '../temp/db.json';
import carregarPedido from '../img/carregarPedido.png';
import avancarStatus from '../img/avancarStatus.png';
import excluirPedido from '../img/excluir.png';

const API_URL = 'http://localhost:3004/status/'

export default class Status extends Component {
    constructor() {
        super();
        this.state = {
            pedidos: [{

            }]
        }
    }
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
                        {dbjson.pedidos.map((pedido, index) => {
                            return (
                                < tr key={pedido.id}>
                                    <th scope="row">{pedido.nome}</th>
                                    <td style={{ textAlign: 'center' }}>{pedido.status}</td>
                                    <td style={{ textAlign: 'center' }}><img src={carregarPedido} style={{ width: '35px', paddingLeft: '5px' }} />
                                        <img src={avancarStatus} style={{ width: '35px', paddingLeft: '5px' }} />
                                        <img src={excluirPedido} style={{ width: '35px', paddingLeft: '5px' }} /></td>
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