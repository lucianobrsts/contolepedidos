import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
