import React, { createContext, createRef, useState } from 'react';

export const NavbarContext = createContext();

const NavbarContextProvider = (props) => {
  const [active, setActive] = useState('home');

  const landingRef = createRef();
  const aboutRef = createRef();
  const servicesRef = createRef();
  const contactRef = createRef();

  return (
    <NavbarContext.Provider
      value={{
        landingRef,
        aboutRef,
        servicesRef,
        contactRef,
        active,
        setActive,
      }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
