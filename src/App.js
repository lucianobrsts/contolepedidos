import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default App;
