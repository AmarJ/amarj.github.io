import React, { Component } from 'react';
import './App.scss';
import "shards-ui/dist/css/shards.min.css"
import Header from './components/layout/Header';
import MainPage from './components/layout/MainPage';
import Experience from './components/layout/Experience';
import Projects from './components/layout/Projects';
import Loader from "./components/loader/Loader";
import Footer from './components/layout/Footer';
// import { loaderStatus } from "./utils/utilities";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <Header />
        <MainPage />
        <Experience /> 
        {/* <Projects /> */}
        <Footer />
        {/* <header className="App-header">
        </header> */}
      </div>
    );
  }
}

export default App;
