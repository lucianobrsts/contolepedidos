import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cadastro from './container/Cadastro';
import Caixa from './container/Caixa';
import Pedido from './container/Pedido';
import Status from './container/Status';
import Home from './container/Home';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/caixa' component={Caixa} />
            <Route path='/pedido' component={Pedido} />
            <Route path='/status' component={Status} />
        </Route>

    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
