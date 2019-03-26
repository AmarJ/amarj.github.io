import React, { Component }  from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="logo">
                                <h1>Amar Jasarbasic</h1>
                            </div>
                        </div>
                        <div className="col">
                            <div className="options">
                                <a href="/">
                                    <div className="resume-link">
                                        View Resume <i className="fas fa-chevron-right"></i>
                                    </div>
                                </a>
                                <a href="/">Projects</a>
                                <a href="/">Experience</a>
                                <a href="/">About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}