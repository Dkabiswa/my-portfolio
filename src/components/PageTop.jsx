import React from "react";
import me from "../images/me.jpeg";

function PageTop() {
  return (
    <div className="page-top">
      <div className="top-content container">
        <div className="row">
          <div className="col-md-7 top-words">
            <h1>👋 Hey, I’m Kabiswa Davis.</h1>
            <p>
              I’m a Software Engineer specializing in full-stack web
              development. I build scalable, user-friendly applications that
              solve real-world problems. Got a project in mind? Let’s build it
              together.
            </p>
          </div>
          <div className="col-md-5 top-image">
            <img src={me} alt="Davis" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTop;
