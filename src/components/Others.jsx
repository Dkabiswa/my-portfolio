import React from 'react';

const OtherProjects = () => {
    return (
        <div className="container others">
            <div className="row mb-2">
                <div className="card col-md-3 card-1">
                    <div className="card-body">
                        <h5 className="card-title">Tembea</h5>
                        <p className="card-text">Andela's internal application used to monitor travel of its employees.</p>
                        <h6 className="card-subtitle mb-2 text-muted">Angular, Node/Express, TypeScript, Slack API, Sass</h6>
                        <a href="https://my-dev-rating.herokuapp.com/login" className="btn btn-primary mr-2 disabled" target="blank">Internal</a>
                        <a href="https://github.com/Dkabiswa/MyDevRating" target="blank" className="btn btn-outline-primary disabled">Private Repo</a>
                    </div>
                </div>
                <div className="card col-md-3 card-2">
                    <div className="card-body">
                        <h5 className="card-title">Yassako Facebook ChatBot</h5>
                        <p className="card-text">A 24/7 facebook messenger chatbot for yassako credit.</p>
                        <h6 className="card-subtitle mb-2 text-muted">Node/Express, Faceebook API</h6>
                        <a href="https://m.me/yassakocredit" className="btn btn-primary mr-3" target="blank">Chat</a>
                            <a href="https://github.com/Dkabiswa/google_search_whatsappbot" target="blank" className="btn btn-outline-primary disabled">Private Repo</a>
                    </div>
                </div>
                <div className="card col-md-3 card-3">
                    <div className="card-body">
                        <h5 className="card-title">Google Search WhatsApp Bot</h5>
                        <p className="card-text">A whatsapp bot wich returns the frist result of a google search as a message.</p>
                        <h6 className="card-subtitle mb-2 text-muted">Node/Express, Google API</h6>
                        <a href="https://my-dev-rating.herokuapp.com/login" className="btn btn-primary mr-3 disabled" target="blank">View Site</a>
                            <a href="https://github.com/Dkabiswa/google_search_whatsappbot" target="blank" className="btn btn-outline-primary"> Repo</a>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="card col-md-3 card-1">
                    <div className="card-body">
                        <h5 className="card-title">Dev Rating</h5>
                        <p className="card-text">Replica of Andelas developer rating web application, I contributed to the development.</p>
                        <h6 className="card-subtitle mb-2 text-muted">React, Node/Express, Sass</h6>
                        <a href="https://my-dev-rating.herokuapp.com/login" className="btn btn-primary mr-3" target="blank">View Site</a>
                            <a href="https://github.com/Dkabiswa/MyDevRating" target="blank" className="btn btn-outline-primary"> Repo</a>
                    </div>
                </div>
                <div className="card col-md-3 card-2">
                    <div className="card-body">
                        <h5 className="card-title">Dkat Auto Mart</h5>
                        <p className="card-text">Web application incharge of buying and selling cars and spare parts.</p>
                        <h6 className="card-subtitle mb-2 text-muted">HTML, JS, Node/Express, CSS</h6>
                        <a href="https://dkabiswa.github.io/AutoMart/UI/login.html" className="btn btn-primary mr-3" target="blank">View Site</a>
                            <a href="https://github.com/Dkabiswa/AutoMart" target="blank" className="btn btn-outline-primary"> Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherProjects;