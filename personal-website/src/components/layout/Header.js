import React, { Component } from 'react';
import './Header.scss';
import resume from "../../assets/files/Amar_Resume.pdf";

var MobileMenuStyle = {
    height: "0px"
}

var MobileMenuIcon = {
    visibikity: false
}

var MobileCloseIcon = {
    isHidden: true
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
        showButton: true,
    }

    clickedMenu = () => {
        this.setState({ showMobileMenu: true });
        MobileMenuStyle = { height: "100%"};
        this.setState({showButton: false});
    }

    clickedMenuClose = () => {
        this.setState({ showMobileMenu: false });
        MobileMenuStyle = { height: "0px;"}; 
        this.setState({showButton: true});
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="logo slide-in-blurred-top">
                                <span className="full-name">
                                    <h1>Amar Jasarbasic</h1>
                                </span>
                                <span className="short-name">
                                    <h1>Amar</h1>
                                </span>
                            </div>
                        </div>
                        <div className="col slide-in-blurred-right">
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
                                    <i className={this.state.showButton ? "fas fa-bars menu-icon" : "fa fa-bars hidden"} onClick={this.clickedMenu} />
                                    <i className={!this.state.showButton ? "fas fa-times menu-icon" : "fa fa-times hidden"} onClick={this.clickedMenuClose} />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showMobileMenu ? <MobileMenu /> : null}
            </div>
        );
    }
}