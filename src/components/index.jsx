import React from 'react';
import Header from './header';
import PageTop from './PageTop';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <>
        <Header />
        <PageTop />
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
    </>
  );
}

export default Home;
