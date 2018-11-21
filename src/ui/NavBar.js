import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link to='/cadastro' className="nav-link">Cadastro</Link>
          </li>
          <li className="nav-item">
            <Link to='/status' className="nav-link">Status</Link>
          </li>
          <li className="nav-item">
            <Link to='/pedido' className="nav-link">Pedidos</Link>
          </li>
          <li className="nav-item">
            <Link to='/caixa' className="nav-link">Caixa</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;