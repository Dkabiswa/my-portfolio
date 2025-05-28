import React from "react";

const OtherProjects = () => {
  return (
    <div className="container">
      <div className="row g-4 mb-2">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Yassako Facebook ChatBot</h5>
              <p className="card-text">
                24/7 chatbot for Yassako credit on Messenger.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                Node/Express, Facebook API
              </h6>
              <a
                href="https://m.me/yassakocredit"
                className="btn btn-primary me-3"
                target="_blank"
                rel="noreferrer"
              >
                Chat
              </a>
              <a
                href="https://github.com/Dkabiswa/google_search_whatsappbot"
                target="_blank"
                className="btn btn-outline-primary disabled"
                rel="noreferrer"
              >
                Private Repo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Google Search WhatsApp Bot</h5>
              <p className="card-text">
                A bot that returns the top Google search result on WhatsApp.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                Node/Express, Google API
              </h6>
              <a
                href="https://my-dev-rating.herokuapp.com/login"
                className="btn btn-primary me-3 disabled"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/Dkabiswa/google_search_whatsappbot"
                target="_blank"
                className="btn btn-outline-primary"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Ikiringo Website</h5>
              <p className="card-text">
                Cultural hub website showcasing African heritage.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">WordPress, CSS</h6>
              <a
                href="https://ikiringo.com/"
                className="btn btn-primary me-3 disabled"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Dev Rating</h5>
              <p className="card-text">
                Contributed to Andela’s internal developer performance tracker.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                React, Node/Express, Sass
              </h6>
              <a
                href="https://my-dev-rating.herokuapp.com/login"
                className="btn btn-primary me-3"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/Dkabiswa/MyDevRating"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Dkat Auto Mart</h5>
              <p className="card-text">
                Online marketplace for cars and spare parts.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                HTML, JS, Node/Express, CSS
              </h6>
              <a
                href="https://dkabiswa.github.io/AutoMart/UI/login.html"
                className="btn btn-primary me-3"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/Dkabiswa/AutoMart"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Tembea</h5>
              <p className="card-text">
                Travel management tool for Andela staff.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                Angular, Node/Express, TypeScript, Slack API, Sass
              </h6>
              <a
                href="https://my-dev-rating.herokuapp.com/login"
                className="btn btn-primary me-2 disabled"
                target="_blank"
                rel="noreferrer"
              >
                Internal
              </a>
              <a
                href="https://github.com/Dkabiswa/MyDevRating"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary disabled"
              >
                Private Repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">ChatRoom</h5>
              <p className="card-text">Secure, real-time chat application.</p>
              <h6 className="card-subtitle mb-2 text-muted">
                React(Next), Chat Engine API, Railway
              </h6>
              <a
                href="https://github.com/Dkabiswa/nextjs-chat"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Dream Solutions Website</h5>
              <p className="card-text">
                Website for a local IT consulting and web services company.
              </p>
              <h6 className="card-subtitle mb-2 text-muted">HTML, JS, CSS</h6>
              <a
                href="https://dkabiswa.github.io/dream-software/index.html"
                className="btn btn-primary me-3"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/Dkabiswa/dream-software"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
