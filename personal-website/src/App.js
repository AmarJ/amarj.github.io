import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import "shards-ui/dist/css/shards.min.css"
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
