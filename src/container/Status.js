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
import axios from 'axios';

const API_URL = 'http://localhost:3000/pedidos';

export default class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exibirPedido: false,
            pedidos: [{
                nome: '',
                descricao: '',
                cpf: '',
                status: 'Novo',
                hora: new Date(),
                id: 0
            }]
        }
        this._atualizarPedido = this._atualizarPedido.bind(this);
        this._excluirPedido = this._excluirPedido.bind(this);
        this._acompanharPedido = this._acompanharPedido.bind(this);
        this._buscarPedidos = this._buscarPedidos.bind(this);
    }

    _atualizarPedido(pedido) {
        console.log(pedido.status);
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
        var p = {
            "nome": pedido.nome,
            "descricao": pedido.descricao,
            "cpf": pedido.cpf,
            "status": status,
            "dataHora": pedido.dataHora,
            "id": pedido.id
        };
        this.props.atualizarPedido(p);
        this._buscarPedidos();
    }

    _handleClick = (event) => {
        event.preventDefault()
        this.setState({
            exibirPedido: !this.state.exibirPedido
        })
    }


    _excluirPedido(pedido) {
        this.props.excluirPedido(pedido);
        this._buscarPedidos();
    }

    _buscarPedidos() {
        //this.props.buscarPedidos();
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
        const { pedidos, carregando } = this.state
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
                        {pedidos.map((pedido) => {
                            return (
                                < tr key={pedido.id}>
                                    <th scope="row" style={{ fontSize: '20px' }}>{pedido.nome}</th>
                                    <td style={{ textAlign: 'center' }}>{this._corStatus(pedido)}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <input style={{ paddingRight: '10px' }} name="carregarPedido" type="image" id="carregarPedido" src={carregarPedido} alt="Carregar Pedido" data-target="#exampleModal" data-toggle="modal"></input>
                                        <input style={{ paddingRight: '10px' }} name="avançarStatus" type="image" id="avançarStatus" src={avancarStatus} alt="Avançar Status" onClick={(e) => this._atualizarPedido(pedido, e)}></input>
                                        <input style={{ paddingRight: '10px' }} name="excluirPedido" type="image" id="excluirPedido" src={excluirPedido} alt="Excluir Pedido" onClick={(e) => this._excluirPedido(pedido, e)}></input>
                                    </td>
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