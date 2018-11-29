import React, { Component } from 'react';
import axios from 'axios';

class Cadastro extends Component {
    state = {
        nome: "",
        descricao: "",
        cpf: "",
        status: "Novo",
        minutos: Math.floor(Math.random() * (60 - 0)) + 0,
        id: Math.floor(Math.random() * (50 - 0)) + 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const pedido = {
            nome: this.state.nome,
            descricao: this.state.descricao,
            cpf: this.state.cpf,
            status: this.state.status,
            minutos: this.state.minutos,
            id: this.state.id
        };

        axios.post('http://localhost:3004/pedidos', {pedido})
        .then(res => {
            console.log(res);
            console.log(pedido)
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br />
                    <h5>Cadastro de Pedidos</h5>
                    <br />

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome do Cliente" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="cpf" name="cpf" placeholder="CPF" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea id="descricao" className="form-control" name="descricao" rows="5" placeholder="Descrição do Pedido" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrar Pedido</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Cadastro