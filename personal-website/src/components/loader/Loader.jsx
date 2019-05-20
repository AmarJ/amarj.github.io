import React from "react";
import "./Loader.css";
import { loaderStatus } from "./../../utils/utilities";

// Loading container having loader respresentation of your choice
// I used the following loader for this example
const LoadingContainer = props => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-title">React Loves RxJS</div>
        <div class="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingStatus: false //Loading state for component
    };
  }

  componentWillMount() {
    // Subscribe to loaderStatus to detect the changes emitted by the any other component
    // If true then it will turn on the loader
    // if false then it will turn off the loader
    loaderStatus.subscribe(result => {
      this.setState({ loadingStatus: result ? true : false });
    });
  }

  // Checking if loadingStatus is true the return the LoadingContainer
  // Else return null
  render() {
    const { loadingStatus } = this.state;
    return loadingStatus ? <LoadingContainer /> : null;
  }
}

export default Loader;