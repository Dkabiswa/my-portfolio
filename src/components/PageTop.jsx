import React from 'react';
import me from '../images/meee.jpg';

function PageTop() {
  return (
    <div className="page-top">
        <div className="top-content container">
            <div className="row">
                <div className="col-md-7 top-words">
                    <h1>Hey, I'm Kabiswa Davis.</h1>
                    <p>A software developer, specilised in full stack web development, you have a project you want to work on lets talk</p>
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
