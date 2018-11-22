import React, { Component } from 'react';

export default class Cadastro extends Component {
    render() {
        return (
            <form>
                <br />
                <h2>Cadastro de Pedidos</h2>
                <br />

                <div className="form-group">
                    <input type="nome" className="form-control" id="nomeCliente" aria-describedby="nomeHelp" placeholder="Nome do Cliente" />
                </div>
                <div className="form-group">
                    <input type="cpf" className="form-control" id="cpf" placeholder="CPF" />
                </div>
                <div class="form-group">
                    <textarea class="form-control" id="descricaoPedido" rows="5" placeholder="Descrição do Pedido"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Registrar Pedido</button>
            </form>

        )
    }
}