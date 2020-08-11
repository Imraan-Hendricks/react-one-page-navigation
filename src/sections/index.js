import React, { useContext } from 'react';
import { NavbarContext } from '../components/navbar/navbar-context';
import Landing from './landing/landing';
import About from './about/about';
import Services from './services/services';
import Contact from './contact/contact';

const Sections = () => {
  const { landingRef, aboutRef, servicesRef, contactRef } = useContext(
    NavbarContext
  );

  return (
    <div>
      <Landing ref={landingRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Sections;
