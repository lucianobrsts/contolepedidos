import React, { Component } from 'react';
import Legenda from '../ui/Legenda';
import ModalPedido from '../ui/ModalPedido';
import carregarPedido from '../img/carregarPedido.png';
import avancarStatus from '../img/avancarStatus.png';
import excluirPedido from '../img/excluir.png';
import bolaVermelha from '../img/bolaVermelha.png';
import bolaAmarela from '../img/bolaAmarela.png';
import bolaVerde from '../img/bolaVerde.png';
import bolaAzul from '../img/bolaAzul.png';
import axios from 'axios';

class Status extends Component {
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

    atualizarPedido(pedido) {
        var status = pedido.status;
        if (pedido.status === 'Novo') {
            status = 'Pedido sendo preparo';
        } else if (pedido.status === 'Pedido sendo preparo') {
            status = 'Pedido em conferência';
        } else if (pedido.status === 'Pedido em conferência') {
            status = 'Pronto para pagamento';
        } else if (pedido.status === 'Pronto para pagamento') {
            status = pedido.status;
        }
    }

    handleChange = event => {
        this.setState({ pedido: event.target.value });
    }

    excluirPedido = (id) => {
        console.log(id);
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
                        <td style={{ textAlign: 'center' }}>
                            <input style={{ paddingRight: '10px' }} name="carregarPedido" type="image" id="carregarPedido" src={carregarPedido} alt="Carregar Pedido" title="Carregar Pedido" data-toggle="modal" data-target="#exampleModal"></input>
                            <input style={{ paddingRight: '10px' }} name="avançarStatus" type="image" id="avançarStatus" src={avancarStatus} alt="Avançar Status" title="Avançar Status" onClick={(e) => this.atualizarPedido(pedido)}></input>
                            <input style={{ paddingRight: '10px' }} name="excluirPedido" type="image" id="excluirPedido" src={excluirPedido} alt="Excluir Pedido" title="Excluir Pedido" onClick={() => { excluirPedido(pedido.id) }}></input>
                        </td>
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
                            <th scope="col" style={{ width: '25%', textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidoList}
                    </tbody>
                </table>
                <Legenda />
                <ModalPedido />

            </div >
        );
    }
}

export default Status