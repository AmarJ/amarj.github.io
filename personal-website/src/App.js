import React, { Component } from 'react';
import './App.scss';
import "shards-ui/dist/css/shards.min.css"
import Header from './components/layout/Header';
import MainPage from './components/layout/MainPage';
import Experience from './components/layout/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Experience />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
