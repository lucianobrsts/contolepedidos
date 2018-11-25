import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import ModalPedido from '../ui/ModalPedido';
import dbjson from '../temp/db.json';
import carregarPedido from '../img/carregarPedido.png';
import avancarStatus from '../img/avancarStatus.png';
import excluirPedido from '../img/excluir.png';
import bolaVermelha from '../img/bolaVermelha.png';
import bolaAmarela from '../img/bolaAmarela.png';
import bolaVerde from '../img/bolaVerde.png';
import bolaAzul from '../img/bolaAzul.png';

export default class Status extends Component {
    constructor() {
        super();
        this.state = {
            pedidos: [{

            }]
        }
    }

    _corStatus(pedido) {
        let cor = ''
        if (pedido.status === 'Novo') {
            cor = <img src={bolaVermelha} alt="Novo Pedido" />;
        } else if (pedido.status === 'Pedido sendo preparado') {
            cor = <img src={bolaAmarela} alt="Pedido sendo preparado" />;
        } else if (pedido.status === 'Pedido em conferência') {
            cor = <img src={bolaVerde} alt="Pedido em conferência" />;
        } else if (pedido.status === 'Pronto para pagamento') {
            cor = <img src={bolaAzul} alt="Pedido para pagamento" />;
        }
        return cor;
    }
    render() {
        return (
            <div>
                <br />
                <h2>Avançar Status do Pedido</h2>
                <br />

                <table className="table table-bordeless table-hover">
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
                                    <th scope="row" style={{ fontSize: '20px' }}>{pedido.nome}</th>
                                    <td style={{ textAlign: 'center' }}>{this._corStatus(pedido)}</td>
                                    <td style={{ textAlign: 'center' }}><img src={carregarPedido} style={{ paddingLeft: '5px' }} alt="Carregar Pedido" data-target="#exampleModal" data-toggle="modal"/>
                                        <img src={avancarStatus} style={{ paddingLeft: '5px' }} alt="Avançar Status" />
                                        <img src={excluirPedido} style={{ paddingLeft: '5px' }} alt="Excluir Pedido" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <ModalPedido />
                <Legenda />

            </div >
        );
    }
}