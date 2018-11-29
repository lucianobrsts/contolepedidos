import React, { Component } from 'react';
import Legenda from '../ui/Legenda'
import axios from 'axios';
import avancarPedido from '../img/avancarStatus.png';
import bolaVermelha from '../img/bolaVermelha.png';
import bolaAmarela from '../img/bolaAmarela.png';
import bolaVerde from '../img/bolaVerde.png';
import bolaAzul from '../img/bolaAzul.png';

export default class Caixa extends Component {
    state = {
        pedidos: []
    }

    componentDidMount() {
        axios.get('http://localhost:3004/pedidos')
            .then(res => {
                //console.log(res)
                this.setState({
                    pedidos: res.data.slice(0, 10)
                })
            })
    }

    corStatus(pedido) {
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
        const { pedidos } = this.state;
        const pedidoList = pedidos.length ? (
            pedidos.map(pedido => {
                return (
                    < tr key={pedido.id}>
                        <th scope="row">{pedido.nome}</th>
                        <td style={{ textAlign: 'center' }}>{this.corStatus(pedido)}</td>
                        <td style={{ textAlign: 'center' }}> <input style={{ paddingRight: '10px' }} name="excluirPedido" type="image" id="excluirPedido" src={avancarPedido} alt="Excluir Pedido" ></input></td>
                    </tr>
                )
            })
        ) : (
                <div className="container">
                    <h5>Ainda não Existem pedidos</h5>
                </div>
            )
        return (
            <div className="container">
                <br />
                <h5>Avançar Status do Pedido</h5>
                <br />

                <table className="table table-bordeless table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: '50%' }}>Cliente</th>
                            <th scope="col" style={{ width: '25%', textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ width: '25%', textAlign: 'center' }}>Finalizar Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidoList}
                    </tbody>
                </table>
                <Legenda />
            </div >
        );
    }
}