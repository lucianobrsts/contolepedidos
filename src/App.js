import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
