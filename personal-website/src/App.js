import React, { Component } from 'react';
import './App.scss';
import "shards-ui/dist/css/shards.min.css"
import Header from './components/layout/Header';
import MainPage from './components/layout/MainPage';
import Experience from './components/layout/Experience';
import Projects from './components/layout/Projects';
import Loader from "./components/loader/Loader";
import Footer from './components/layout/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';

const Sections = () => {
  const anchors = ['About', 'Experience', 'Project'];
  const sectionsArray = [<MainPage />, <Experience />, <Projects />];
  return (anchors.map((item, index) => { return (<ScrollableAnchor id={item} key={index}><div>{sectionsArray[index]}</div></ScrollableAnchor>) }));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <Header />
        <Sections/>
        <Footer />
      </div>
    );
  }
}

export default App;
