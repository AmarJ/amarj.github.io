import React, { Component } from 'react';
import './App.scss';
import "shards-ui/dist/css/shards.min.css"
import Header from './components/layout/Header';
import MainPage from './components/layout/MainPage';
import Experience from './components/layout/Experience';
import Projects from './components/layout/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Experience />
        <Projects />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
