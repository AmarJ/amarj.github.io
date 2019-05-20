import React, { Component } from 'react';
import './Projects.scss';
import talentboard from '../../assets/imgs/talentboard.gif';
import Slider from "react-slick";
import logoproject_1 from '../../assets/imgs/logoproject-1.png';
import logoproject_2 from '../../assets/imgs/logoproject-2.png';
import logoproject_3 from '../../assets/imgs/logoproject-3.png';
import logoproject_4 from '../../assets/imgs/logoproject-4.png';
import logoproject_5 from '../../assets/imgs/logoproject-5.png';
import cnn from '../../assets/imgs/cnn.png';

export default class Projects extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

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
                                Open Source - Computer Vision
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
                                    <a href="https://github.com/AmarJ/darknet-NN-framework">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>                                
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 logo-box">
                            <Slider {...settings}>
                                <div className='logo-img'>
                                    <img src={logoproject_1} alt="loading..." />
                                </div>
                                <div className='logo-img'>
                                    <img src={logoproject_2} alt="loading..." />
                                </div>
                                <div className='logo-img'>
                                    <img src={logoproject_3} alt="loading..." />
                                </div>
                                <div className='logo-img'>
                                    <img src={logoproject_4} alt="loading..." />
                                </div>
                                <div className='logo-img'>
                                    <img src={logoproject_5} alt="loading..." />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="project-section">
                    <div className="row">
                        <div className="col-sm-6 project-cnn-wrapper">
                            <img src={cnn} className='cnn-img' alt="loading..." />
                        </div>
                        <div className="col-sm-6 project-description">
                            <div className="project-type">
                                Computer Vision
                            </div>
                            <div className="project-name">
                                Convolutional Neural Network
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        Built my own AlexNet convolutional neural network from scratch. This is my second machine learning project after succesfully building a <a href="https://github.com/AmarJ/NN">multi-layer perceptron</a>. I primarily used the <a href="http://cs231n.github.io/convolutional-networks/">cs231n Stanford course notes</a> and the AlexNet <a href="https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf">research paper</a> as a reference.
                                    </p>
                                    <a href="https://github.com/AmarJ/CNN">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
