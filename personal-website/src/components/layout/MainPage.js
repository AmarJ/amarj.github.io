import React, { Component } from 'react'
import './MainPage.scss'
import art from '../../assets/imgs/me.png';

export default class MainPage extends Component {
    render() {
        return (
            <div id="main" className="main-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <div className="banner-content">
                                <h1>
                                    Hello! 👋
                                </h1>
                                <p>
                                    My name is <b>Amar Jasarbasic</b>, and I am a software engineer based in Ottawa, Canada. I am currently in <b>3rd year at the
                                    University of Ottawa</b> and will be working as a software engineering intern at Microsoft
                                    in Vancouver this summer.
							    </p>
                                <button type="button" className="btn btn-outline-primary dark-blue">Send me a message <i className="fas fa-envelope mail-icon"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <img src={art} className='me' alt="loading..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
