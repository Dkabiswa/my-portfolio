import React from "react";
import bn from "../images/bn.png";
import dalle from "../images/dalle.png";
import accu from "../images/accu.png";
import OtherProjects from "./Others";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="text-center py-5">
          <h3>SAMPLE WORKS</h3>
        </div>
        <div className="row about-sect">
          <div className="col-md-6 about-words">
            <h1>DALL-E Clone</h1>
            <p> A web app using OpenAI's API to generate AI-powered images.</p>
            <p className="text-muted">
              <b>Tech: </b>React(Next js), Tailwind, Node/Express, OpenAI API
              and MongoDD
            </p>
            <div className="buttons-proj">
              <a
                href="https://github.com/Dkabiswa/dalle_clone"
                target="blank"
                className="btn btn-outline-primary"
              >
                {" "}
                Repo
              </a>
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
            <p>An internal travel booking platform for company employees.</p>
            <p className="text-muted">
              <b>Tech: </b>React, Node.js, Express, Docker, WebSockets, Sass
            </p>
            <div className="buttons-proj">
              <a
                href="https://bn-marvel.herokuapp.com/"
                className="btn btn-primary me-3"
                target="blank"
              >
                View Site
              </a>
              <a
                href="https://github.com/andela/mervels-bn-frontend"
                target="blank"
                className="btn btn-outline-primary"
              >
                {" "}
                Repo
              </a>
            </div>
          </div>
        </div>
        <div className="row about-sect">
          <div className="col-md-6 about-words">
            <h1>Dashboard template</h1>
            <p>
              A lightweight admin dashboard for managing users, orders, and
              inventory.
            </p>
            <p className="text-muted">
              <b>Tech: </b>HTML, JS, CSS
            </p>
            <div className="buttons-proj">
              <a
                href="https://github.com/Dkabiswa/admin-dashboard-html"
                target="blank"
                className="btn btn-outline-primary"
              >
                Repo
              </a>
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
  );
};

export default Projects;
