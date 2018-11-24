import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import seta from '../img/setas.png';
import dbjson from '../temp/db.json'

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
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Tempo em Espera</th>
                            <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dbjson.pedidos.map((pedido, index) => {
                            return (
                                < tr key={pedido.id}>
                                    <th scope="row">{pedido.nome}</th>
                                    <td style={{ textAlign: 'center' }}>{pedido.status}</td>
                                    <td style={{ textAlign: 'center' }}><img src={seta} style={{ width: '30px' }} /></td>
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