import React, { Component } from 'react';
import './Projects.scss';
import talentboard from '../../assets/imgs/talentboard.gif';
import logoproject_1 from '../../assets/imgs/logoproject-1.png';
import logoproject_2 from '../../assets/imgs/logoproject-2.png';
import logoproject_3 from '../../assets/imgs/logoproject-3.png';
import logoproject_4 from '../../assets/imgs/logoproject-4.png';
import logoproject_5 from '../../assets/imgs/logoproject-5.png';
import logoproject_6 from '../../assets/imgs/logoproject-6.png';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col projects-title">
                            Projects
                        </div>
                    </div>
                </div>
                <div className="project-section">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={talentboard} className='talentboard-gif' alt="loading..." />
                        </div>
                        <div className="col-sm-6 project-description">
                            <div className="project-type">
                                Web app
                            </div>
                            <div className="project-name">
                                Talentboard
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        Talentboard is an applicant tracking tool for HR and hiring managers. Talentboard's simple drag & drop interface introduces a unique, visual approach to managing applicants through the hiring process.
                                    </p>
                                    <a href="https://github.com/TalentBoard/Talentboard">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                    <a href="https://talentboard-app.herokuapp.com/login">
                                        <button type="button" className="btn btn-light button-2" href="https://github.com/TalentBoard/Talentboard">
                                            Live Demo
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-section">
                    <div className="row">
                        <div className="col-sm-6 project-description">
                            <div className="project-type">
                                Open Source
                            </div>
                            <div className="project-name">
                                Logo detection (Darknet)
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        I used Joseph Redmon's image detection framework <a href="https://pjreddie.com/media/files/papers/yolo.pdf">Darknet</a> to detect popular logos in images. I added some additonal features to the framework such as a watch folder, threading for network predictions, and load balancing images in the watch folder.
                                    </p>
                                    <a href="https://github.com/TalentBoard/Talentboard">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                    <a href="https://talentboard-app.herokuapp.com/login">
                                        <button type="button" className="btn btn-light button-2" href="https://github.com/TalentBoard/Talentboard">
                                            Live Demo
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
