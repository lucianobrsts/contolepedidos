import React from 'react';
import { Link, withRouter} from 'react-router-dom';

const Navbar = (props) => {
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo" href="/home">Controle Pedidos</a>
        <ul className="right">
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/status">Status</Link></li>
          <li><Link to="/Pedido">Pedido</Link></li>
          <li><Link to="/caixa">Caixa</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)