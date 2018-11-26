import React, { Component } from 'react';

const INITIAL_STATE = {
    nome: "",
    cpf: "",
    descricao: "",
    status: "NOVO",
    hora: new Date(),
    id: 0
}

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = INITIAL_STATE
        this._handleChange = this._handleChange.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleChange = event => {
        event.preventDefault()
        console.log([event.target.name])
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleSubmit = event => {
        event.preventDefault()
        const pedido = { ...this.state }
        this._adicionarPedido(pedido)
        this.setState({ ...this.state, ...INITIAL_STATE })
    }

    render() {
        const { nome, cpf, descricao } = this.state
        return (
            <div>
                <br />
                <h2>Cadastro de Pedidos</h2>
                <br />

                <form onSubmit={this._handleSubmit}>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" name="nome" value={nome} placeholder="Nome do Cliente" onChange={this._handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" name="cpf" value={cpf} placeholder="CPF" onChange={this._handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <textarea className="form-control" name="descricao" value={descricao} rows="5" placeholder="Descrição do Pedido" onChange={this._handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrar Pedido</button>
                </form>
            </div>
        )
    }
}