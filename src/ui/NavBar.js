import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light"style={{ backgroundColor: '#e3f2fd' }}>
      <a className="navbar-brand" href="/home">Controle Pedidos</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/cadastro">Cadastro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/status">Status</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pedido">Pedido</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/caixa">Caixa</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)