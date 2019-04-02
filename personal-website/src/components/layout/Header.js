import React, { Component } from 'react'
import './Header.scss'
import resume from "../../assets/files/Amar_Resume.pdf";

var MobileMenuStyle = {
    height: "0px"
}

const MobileMenu = (props) => {
    return (
        <div className="nav-menu" style={MobileMenuStyle}>
            <a href={resume}>
                <div className="resume-link">
                    View Resume <i className="fas fa-chevron-right"></i>
                </div>
            </a>
            <a href="/">Projects</a>
            <a href="/">Experience</a>
            <a href="/">About</a>
        </div>
    );
}

export default class Header extends Component {
    state = {
        showMobileMenu: false,
    }

    clickedMenu = () => {
        this.setState({ showMobileMenu: true });
        MobileMenuStyle = { height: "100%"}; 
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="logo">
                                <span className="full-name">
                                    <h1>Amar Jasarbasic</h1>
                                </span>
                                <span className="short-name">
                                    <h1>AJ</h1>
                                </span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="full-options">
                                <a href="/">
                                    <div className="resume-link">
                                        View Resume <i className="fas fa-chevron-right"></i>
                                    </div>
                                </a>
                                <a href="/">Projects</a>
                                <a href="/">Experience</a>
                                <a href="/">About</a>
                            </div>
                            <div className="short-options">
                                    <i className="fas fa-bars menu-icon" onClick={this.clickedMenu}></i>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showMobileMenu ? <MobileMenu /> : null}
            </div>
        );
    }
}