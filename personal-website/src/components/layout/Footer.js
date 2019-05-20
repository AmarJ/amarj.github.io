import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="say-hello">
                    <h1>
                        Say hello, contact me on any of these platforms!
                    </h1>
                </div>


                <div className="container">
                    <div className="web-footer">
                        <div classname="row">
                            <div className="col-md-6 offset-md-3 social">
                                <div class="container">
                                    <div class="row justify-content-md-center">
                                        <a className="no-underline" href="https://www.instagram.com/amar_jasar/">
                                            <div class="col-md-auto name">
                                                <i class="fab fa-instagram social-icon"></i>
                                                Intagram
                                            </div>
                                        </a>
                                        <a className="no-underline" href="https://www.linkedin.com/in/amarjasarbasic/">
                                            <div class="col-md-auto name">
                                                <i class="fab fa-linkedin social-icon"></i>
                                                LinkedIn
                                            </div>
                                        </a>
                                        <a className="no-underline " href="https://github.com/AmarJ">
                                            <div class="col-md-auto name">
                                                <i class="fab fa-github social-icon"></i>
                                                Github
                                            </div>
                                        </a>
                                        <a className="no-underline in-line" href="mailto:amarjasarbasic@email.com">
                                            <div class="col-md-auto name">
                                                <i class="far fa-envelope social-icon"></i>
                                                Email
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-footer">
                        <div class="row">
                            <div className="col-md-6 offset-md-3 social">
                                <div class="container">
                                    <div class="row justify-content-md-center">
                                        <a className="no-underline" href="https://www.instagram.com/amar_jasar/">
                                            <div class="col-md-auto name">
                                                <i class="fab fa-instagram social-icon"></i>
                                            </div>
                                        </a>
                                        <a className="no-underline" href="https://www.linkedin.com/in/amarjasarbasic/">
                                            <div class="col-md-auto name">
                                                <i class="fab fa-linkedin social-icon"></i>
                                            </div>
                                        </a>
                                        <a className="no-underline " href="https://github.com/AmarJ">
                                            <div class="col-md-auto name">
                                                <i class="fab fa-github social-icon"></i>
                                            </div>
                                        </a>
                                        <a className="no-underline" href="mailto:amarjasarbasic@email.com">
                                            <div class="col-md-auto name">
                                                <i class="far fa-envelope social-icon"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="created-by">
                    I built this site using <b>Javascript</b> and <b>React.</b> You can find the source code <a href="https://github.com/AmarJ/amarj.github.io">here</a> ❤
                </div>

                <div className="blue-line">

                </div>

            </div >

        )
    }
}
