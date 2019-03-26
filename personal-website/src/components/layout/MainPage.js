import React, { Component } from 'react'
import './MainPage.css'
import art from '../../imgs/2.gif';

export default class MainPage extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="banner-content">
                                <h1>
                                    Hello! 👋
                                </h1>
                                <p>
                                    I am a software engineer based in Ottawa, Canada. I am currently in 3rd year at the
                                    University of Ottawa and will be working as a software engineering intern at Microsoft
                                    in Vancouver this summer.
							    </p>
                                <button type="button" class="btn btn-outline-primary">Send me a message <i class="fas fa-envelope mail-icon"></i></button>
                            </div>
                        </div>
                        <div className="col">
                            <img src={art} className='gif-load' alt="loading..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
