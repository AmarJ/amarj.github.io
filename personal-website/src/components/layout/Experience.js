import React, { Component } from 'react';
import './Experience.scss';
import microsoftLogo from '../../images/microsoft.png';
import shopifyLogo from '../../images/shopify.png';
import morganstanleyLogo from '../../images/morganstanley.png';
import nxpLogo from '../../images/nxp.png';

export default class Experience extends Component {
    render() {
        return (
            <div id="experience" className="experience-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="experience-title">
                                Experience
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card company-microsoft">
                                <img src={microsoftLogo} alt="Microsoft" className="company-image" />
                                <div className="overlay-microsoft">
                                    <div className="company-desc text-black">
                                        <h4>Microsoft</h4>
                                        <h5>Software Engineering Intern</h5>
                                        <p>
                                            May 2019 - Aug. 2019<br></br>
                                            Vancouver, Canada
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card company-shopify">
                                <img src={shopifyLogo} alt="Shopify" className="company-image-shopify" />
                                <div className="overlay-shopify">
                                    <div className="company-desc text-white">
                                        <h4>Shopify</h4>
                                        <h5>Data Engineering Intern</h5>
                                        <p>
                                            Sept. 2018 - Dec. 2018<br></br>
                                            Ottawa, Canada (HQ)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row top-margin-5">
                        <div className="col-md-6">
                            <div className="card company-morganstanley">
                                <img src={morganstanleyLogo} alt="MorganStanley" className="company-image-morganstanely" />
                                <div className="overlay-morganstanley">
                                    <div className="company-desc text-white">
                                        <h4>Morgan Stanley</h4>
                                        <h5>Technology Analyst Intern</h5>
                                        <p>
                                            Jan. 2018 - May 2018<br></br>
                                            Montreal, Canada 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card company-nxp">
                                <img src={nxpLogo} alt="NXP" className="company-image-nxp" />
                                <div className="overlay-nxp">
                                    <div className="company-desc text-black">
                                        <h4>NXP Semiconductors</h4>
                                        <h5>Verification Engineering Intern</h5>
                                        <p>
                                            May 2017 - Aug. 2017<br></br>
                                            Ottawa, Canada
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}