import React from "react";

const About = () => {
  return (
    <div className="container about-me pb-4">
      <div className="text-center py-5">
        <h3>SOMETHING ABOUT ME</h3>
      </div>
      <h1>Who I Am?</h1>
      <p>
        I'm a full-stack software developer with a Bachelor's degree in Computer
        Science. These days, I’m mostly taking on contractor gigs and personal
        projects. I’ve put in the hours to sharpen my skills, and some of the
        tools I use regularly include:
        <ul>
          <li>React, Next Js</li>
          <li>Vue</li>
          <li>Node/Express</li>
          <li>Docker</li>
          <li>TypeScript, JavaScript, Python and Rust</li>
        </ul>
        More Information can be found in my{" "}
        <a
          href="https://drive.google.com/file/d/1dbAetbiT0z_buNyZuBnuDCiiswOiV_IB/view?usp=sharing"
          target="blank"
        >
          Resume
        </a>
      </p>
      <p>
        When I’m not coding, you’ll probably find me listening to music
        (anything from reggae to OPM), watching football (big Manchester United
        fan here), or diving into a good book or tech blog.
      </p>
      <h1>Why work with me?</h1>
      <p>
        I care deeply about user experience, code quality, and hitting
        deadlines. I believe in building tech that’s as reliable as it is
        innovative and I communicate clearly every step of the way.
      </p>
    </div>
  );
};

export default About;
