import React from 'react';
import bn from '../images/bn.png';
import iki from '../images/iki.png';
import dkat from '../images/dkat.png';
import OtherProjects from './Others';

const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="text-center pt-2"><h3>SAMPLE WORKS</h3></div>
                <div className="row about-sect">
                    <div className="col-md-6 about-words">
                        <h1>Ikiringo</h1>
                        <p> A webiste whic focuses on harnessing creative power of cultural troupes.
                            I designed and developed the site
                        </p>
                        <p className="text-muted">React, Bootstrap, Node/Express, Sass</p>
                        <div className="buttons-proj">
                            <a href="https://staging.ikiringo.rw" className="btn btn-primary mr-3" target="blank">View Site</a>
                            <a href="#" className="btn btn-outline-primary disabled">Private Repo</a>
                        </div>
                    </div>
                    <div className="col-md-6 pt-4">
                        <div className="about-image">
                        <img src={iki} alt="ikiringo" />
                        </div>
                    </div>
                </div>
                <div className="row about-sect">
                <div className="col-md-6 pt-4">
                        <div className="about-image">
                        <img src={bn} alt="barefoot nomad" />
                        </div>
                    </div>
                    <div className="col-md-6 about-words">
                        <h1>BareFoot Nomad</h1>
                        <p> Web application helps company workers to book trips and accomodations.
                            I contibuted as a full-stack developer
                        </p>
                        <p className="text-muted">React, Docker, Node/Express, Sass, Web Sockets</p>
                        <div className="buttons-proj">
                            <a href="https://bn-marvel.herokuapp.com/" className="btn btn-primary mr-3" target="blank">View Site</a>
                            <a href="https://github.com/andela/mervels-bn-frontend" target="blank" className="btn btn-outline-primary"> Repo</a>
                        </div>
                    </div>
                </div>
                <div className="row about-sect">
                    <div className="col-md-6 about-words">
                        <h1>Dkat Automart</h1>
                        <p> Web application incharge of buying and selling cars and spare parts.
                            I designed and developer the application
                        </p>
                        <p className="text-muted">HTML, JS, Node/Express, CSS</p>
                        <div className="buttons-proj">
                            <a href="https://dkabiswa.github.io/AutoMart/UI/login.html" className="btn btn-primary mr-3" target="blank">View Site</a>
                            <a href="https://github.com/Dkabiswa/AutoMart" target="blank" className="btn btn-outline-primary"> Repo</a>
                        </div>
                    </div>
                    <div className="col-md-6 pt-4">
                        <div className="about-image">
                        <img src={dkat} alt="automart" />
                        </div>
                    </div>
                </div>
            </div>
            <OtherProjects />
        </>
    )
}

export default Projects;