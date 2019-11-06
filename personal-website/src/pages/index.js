import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.css';
import "shards-ui/dist/css/shards.min.css"

import './index.scss';
import Header from '../components/layout/Header';
import MainPage from '../components/layout/MainPage';
import Experience from '../components/layout/Experience';
import Projects from '../components/layout/Projects';
import Loader from "../components/loader/Loader";
import Footer from '../components/layout/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';


// const Sections = () => {
//   const anchors = ['About', 'Experience', 'Project'];
//   const sectionsArray = [<MainPage />, <Experience />, <Projects />];
//   return (anchors.map((item, index) => { return (<ScrollableAnchor id={item} key={index}><div>{sectionsArray[index]}</div></ScrollableAnchor>) }));
// }


const IndexPage = () => (
  <div className="App">
        <Loader />
        <Header />
        <MainPage />
        <Experience />
        <Projects />
        <Footer />
  </div>
)

export default IndexPage