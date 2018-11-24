import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import dbjson from '../temp/db.json';
import bolaVermelha from '../img/bolaVermelha.png';
import bolaAmarela from '../img/bolaAmarela.png';
import bolaVerde from '../img/bolaVerde.png';
import bolaAzul from '../img/bolaAzul.png';

export default class Pedido extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exibirPedido: false,
            pedidos: [{
                nome: '',
                descricao: '',
                cpf: '',
                status: 'Novo',
                dataHora: new Date(),
                id: 0
            }]
        }
    }

    _corStatus(pedido) {
        let cor = ''
        if (pedido.status === 'Novo') {
            cor = <img src={bolaVermelha} alt="Novo Pedido"/>;
        } else if (pedido.status === 'Pedido sendo preparado') {
            cor = <img src={bolaAmarela} alt="Pedido sendo preparado"/>;
        } else if (pedido.status === 'Pedido em conferência') {
            cor = <img src={bolaVerde} alt="Pedido em conferência"/>;
        } else if (pedido.status === 'Pronto para pagamento') {
            cor = <img src={bolaAzul} alt="Pedido para pagamento"/>;
        }
        return cor;
    }

    render() {
        const { pedido } = this.props
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
                                    <th scope="row" style={{fontSize: '20px' }}>{pedido.nome}</th>
                                    <td style={{ textAlign: 'center', fontSize: '20px' }}> <strong>{pedido.dataHora}</strong> min </td>
                                    <td style={{ textAlign: 'center' }}>{this._corStatus(pedido)} </td>
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