import React, { Component } from 'react'
import './Experience.scss'
import microsoftLogo from '../../assets/imgs/microsoft.png';
import shopifyLogo from '../../assets/imgs/shopify.png';
import morganstanleyLogo from '../../assets/imgs/morganstanley.png';
import nxpLogo from '../../assets/imgs/nxp.png';

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
                            <div class="card company-microsoft">
                                <img src={microsoftLogo} alt="Microsoft" className="company-image" />
                                <div class="overlay-microsoft">
                                    <div class="company-desc text-black">
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
                            <div class="card company-shopify">
                                <img src={shopifyLogo} alt="Shopify" className="company-image-shopify" />
                                <div class="overlay-shopify">
                                    <div class="company-desc text-white">
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
                            <div class="card company-morganstanley">
                                <img src={morganstanleyLogo} alt="MorganStanley" className="company-image-morganstanely" />
                                <div class="overlay-morganstanley">
                                    <div class="company-desc text-white">
                                        <h4>Morgan Stanley</h4>
                                        <h5>Technical Analyst Intern</h5>
                                        <p>
                                            Jan. 2018 - May 2018<br></br>
                                            Montreal, Canada 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card company-nxp">
                                <img src={nxpLogo} alt="NXP" className="company-image-nxp" />
                                <div class="overlay-nxp">
                                    <div class="company-desc text-black">
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