import React from 'react';
import Header from './header';
import PageTop from './PageTop';
import Services from './Services';

function Home() {
  return (
    <>
        <Header />
        <PageTop />
        <section id="services">
            <Services />
        </section>
    </>
  );
}

export default Home;
