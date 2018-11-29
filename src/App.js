import React, { Component } from 'react';
import NavBar from './ui/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Status from './components/Status';
import Pedido from './components/Pedido';
import Caixa from './components/Caixa';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {this.props.children}
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/status' component={Status} />
            <Route path='/pedido' component={Pedido} />
            <Route path='/caixa' component={Caixa} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;