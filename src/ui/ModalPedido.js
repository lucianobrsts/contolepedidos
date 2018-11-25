import React, { Component } from 'react';

export default class ModalPedido extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Informações do Pedido</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Cliente:</label>
                                    <input type="text" className="form-control" id="cliente" />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">CPF:</label>
                                    <input type="text" className="form-control" id="cpf" />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Descrição:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}