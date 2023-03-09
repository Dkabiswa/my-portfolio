import React from 'react';
import bn from '../images/bn.png';
import dalle from '../images/dalle.png';
import accu from '../images/accu.png';
import OtherProjects from './Others';

const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="text-center py-5"><h3>SAMPLE WORKS</h3></div>
                <div className="row about-sect">
                    <div className="col-md-6 about-words">
                        <h1>DALL-E Clone</h1>
                        <p> This project is a web application that generates AI images using OpenAI's DALL-E API. 
                            The application was built using Next.js, Node.js, Express, Tailwind CSS, and the OpenAI API. The main goal of the project was
                             to replicate the functionality of the DALL-E API and provide users with a user-friendly interface to generate AI images
                        </p>
                        <p className="text-muted">React(Next js), Tailwind, Node/Express, OpenAI API and MongoDD</p>
                        <div className="buttons-proj">
                            <a href="https://github.com/Dkabiswa/dalle_clone" target="blank" className="btn btn-outline-primary"> Repo</a>
                        </div>
                    </div>
                    <div className="col-md-6 pt-4">
                        <div className="about-image">
                        <img src={dalle} alt="ikiringo" />
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
                        <p>Web application that allows employees of a company to book trips and accommodations. 
                            The application was built using React, Docker, Node.js, Express, Sass, and web sockets. 
                            The main goal of the project was to provide employees with an easy and efficient way to book travel and accommodations for work-related trips
                        </p>
                        <p className="text-muted">React, Docker, Node/Express, Sass, Web Sockets</p>
                        <div className="buttons-proj">
                            <a href="https://bn-marvel.herokuapp.com/" className="btn btn-primary me-3" target="blank">View Site</a>
                            <a href="https://github.com/andela/mervels-bn-frontend" target="blank" className="btn btn-outline-primary"> Repo</a>
                        </div>
                    </div>
                </div>
                <div className="row about-sect">
                    <div className="col-md-6 about-words">
                        <h1>Dashboard template</h1>
                        <p>This project is a dashboard template for tracking customers, projects, orders, and inventory. 
                            The template was created using HTML, JavaScript, and CSS. 
                            The main goal of the project was to provide users with a customizable and intuitive way to track key business metrics
                        </p>
                        <p className="text-muted">HTML, JS, CSS</p>
                        <div className="buttons-proj">
                            <a href="https://github.com/Dkabiswa/admin-dashboard-html" target="blank" className="btn btn-outline-primary">Repo</a>
                        </div>
                    </div>
                    <div className="col-md-6 pt-4">
                        <div className="about-image">
                        <img src={accu} alt="automart" />
                        </div>
                    </div>
                </div>
            </div>
            <OtherProjects />
        </>
    )
}

export default Projects;