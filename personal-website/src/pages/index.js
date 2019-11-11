import React from "react"

import 'bootstrap/dist/css/bootstrap.css';
import "shards-ui/dist/css/shards.min.css"

import './index.scss';
import { graphql } from 'gatsby';
import Header from '../components/layout/Header';
import MainPage from '../components/layout/MainPage';
import Experience from '../components/layout/Experience';
import Projects from '../components/layout/Projects';
import Loader from "../components/loader/Loader";
import Footer from '../components/layout/Footer';
import Jobs from "../components/layout/Jobs";

import PropTypes from 'prop-types';

// const Sections = () => {
//   const anchors = ['About', 'Experience', 'Project'];
//   const sectionsArray = [<MainPage />, <Experience />, <Projects />];
//   return (anchors.map((item, index) => { return (<ScrollableAnchor id={item} key={index}><div>{sectionsArray[index]}</div></ScrollableAnchor>) }));
// }


const IndexPage = ({ location, data }) => (
  <div className="App">
        <Loader />
        <Header />
        <MainPage />
        <Jobs data={data.jobs.edges} />
        <Experience />
        <Projects />
        <Footer />
  </div>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage

export const pageQuery = graphql`
  {
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
     edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
  }
`;
